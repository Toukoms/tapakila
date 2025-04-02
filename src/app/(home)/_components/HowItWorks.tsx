import React from "react";
import { BiCalendar, BiSearch } from "react-icons/bi";
import { BsTicket } from "react-icons/bs";

interface StepProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function Step({ icon, title, description }: StepProps) {
  return (
    <div className="flex flex-col items-center text-center md:items-start md:text-left">
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-medium mb-2">{title}</h3>
      <p className="text-muted-foreground max-w-sm">{description}</p>
    </div>
  );
}

export function HowItWorks() {
  return (
    <section className="py-12 md:py-18">
      <div className="container mx-auto flex flex-col items-center justify-center">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-semibold tracking-tight mb-4">
            How It Works
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover, book, and enjoy events in just a few simple steps
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 max-w-6xl">
          <Step
            icon={<BiSearch className="h-6 w-6" />}
            title="Find Events"
            description="Browse through our curated selection of events or use search filters to find exactly what you're looking for."
          />

          <Step
            icon={<BiCalendar className="h-6 w-6" />}
            title="Select Your Date"
            description="Choose the perfect date and time that fits your schedule from available options."
          />

          <Step
            icon={<BsTicket className="h-6 w-6" />}
            title="Book Tickets"
            description="Secure your spot by selecting and purchasing tickets for your chosen event directly through our platform."
          />
        </div>
      </div>
    </section>
  );
}
