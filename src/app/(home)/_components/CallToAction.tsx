import Link from "next/link";

export function CallToAction() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Experience Amazing Events?
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-8">
            Join thousands of people discovering and booking tickets to the most
            exciting events every day.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/events"
              className="btn btn-lg btn-secondary rounded-full"
            >
              Browse Events
            </Link>
            <Link
              href="/events"
              className="btn btn-lg btn-outline rounded-full bg-transparent text-primary-foreground border-primary-foreground/20 hover:bg-primary-foreground/10"
            >
              Create an Account
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
