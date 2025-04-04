"use server";
import { redirect } from "next/navigation";
import Stripe from "stripe";

const STRIPE_SECRET_KEY = process.env.STRIPE_SECRET_KEY as string;

export async function checkoutOrder(
  tickets: TicketTypeWithQts[],
  email: string,
  buyerId: string
) {
  const stripe = new Stripe(STRIPE_SECRET_KEY);

  try {
    const session = await stripe.checkout.sessions.create({
      customer_email: email,
      line_items: tickets.map((ticket) => ({
        price_data: {
          currency: ticket.currency.title,
          unit_amount: ticket.price,
          product_data: {
            name: `${ticket.event.title} - ${ticket.title}`,
            description: ticket.description,
          },
        },
        quantity: ticket.quantity,
      })),
      mode: "payment",
      metadata: {
        eventId: tickets[0].event.id,
        tickets: JSON.stringify(
          tickets.map((ticket) => ({
            id: ticket.id,
            quantity: ticket.quantity,
            price: ticket.price,
            currencyId: ticket.currency.id,
          }))
        ),
        buyerId: buyerId,
      },
      success_url: `${process.env.NEXT_PUBLIC_SERVER_URL}/profile`,
      cancel_url: `${process.env.NEXT_PUBLIC_SERVER_URL}/`,
    });

    if (!session.url) {
      throw new Error("No url redirection found!");
    }

    redirect(session.url!);
  } catch (error) {
    throw error;
  }
}
