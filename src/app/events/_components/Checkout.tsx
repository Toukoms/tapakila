"use client";
import React, { useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { checkoutOrder } from "./checkout.action";
import { toast } from "react-toastify";
import { getUser } from "@/lib/auth";
import { useRouter } from "next/navigation";

loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

const Checkout = ({ tickets }: { tickets: TicketTypeWithQts[] }) => {
  const router = useRouter();

  useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);
    if (query.get("success")) {
      toast.success("Order placed! You will receive an email confirmation.");
    }

    if (query.get("canceled")) {
      toast.error(
        "Order canceled -- continue to shop around and checkout when you’re ready."
      );
    }
  }, []);

  const onCheckout = async () => {
    const user = await getUser();
    if (!user) {
      toast.error("Please login first");
      router.replace(`/login?url=/events/${tickets[0].event.id}`);
      return;
    }
    await checkoutOrder(tickets, user.email, user.id);
  };

  return (
    <form action={onCheckout}>
      <button
        type="submit"
        role="link"
        className="btn btn-lg btn-primary w-fit"
        disabled={tickets.filter((ticket) => ticket.quantity > 0).length === 0}
      >
        Purchase
      </button>
    </form>
  );
};

export default Checkout;
