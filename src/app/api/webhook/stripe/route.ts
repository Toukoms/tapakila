import { NextRequest, NextResponse } from "next/server";
import stripe from "stripe";

const BASE_API_URL = process.env.NEXT_PUBLIC_API_BASE_URL as string;

export async function POST(req: NextRequest) {
  const body = await req.text();

  const sig = req.headers.get("stripe-signature") as string;
  const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET!;

  let event;

  try {
    event = stripe.webhooks.constructEvent(body, sig, endpointSecret);
  } catch (err: any) {
    console.error("[Webhook error]", err.message);
    return NextResponse.json({ message: "Webhook error", error: err });
  }

  // Get the ID and type
  const eventType = event.type;

  // CREATE
  if (eventType === "checkout.session.completed") {
    const { id, metadata } = event.data.object;

    console.log("[Webhook] Checkout Session:", event.data.object);

    if (!id || !metadata) {
      return NextResponse.json({ message: "Missing data" }, { status: 404 });
    }

    const { eventId, buyerId, tickets } = metadata;
    const ticketOrders: {
      id: string;
      quantity: number;
      price: number;
      currencyId: string;
    }[] = JSON.parse(tickets);

    ticketOrders.forEach(async (ticket) => {
      const ticketOrder = {
        event: {
          id: eventId,
        },
        ticketType: {
          id: ticket.id,
        },
        user: {
          id: buyerId,
        },
        currency: {
          id: ticket.currencyId,
        },
        ticketNumber: `${ticket.quantity}`,
        amountPaid: ticket.price * ticket.quantity,
        paymentConfirmed: true,
      };

      const res = await fetch(`${BASE_API_URL}/tickets`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(ticketOrder),
      });

      if (
        !res.ok ||
        !(res.status === 200 || res.status === 201) ||
        res.body === null
      ) {
        return NextResponse.json({ message: "Error" }, { status: 500 });
      }
    });

    // Tickets added to the database
    return NextResponse.json({ message: "OK" });
  } else {
    console.log(`[Webhook] Unhandled event type: ${event.type}`);
  }

  return new Response("", { status: 200 });
}
