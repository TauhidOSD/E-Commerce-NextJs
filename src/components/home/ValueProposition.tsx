import { Truck, ShieldCheck, Headphones, RotateCcw } from "lucide-react";

interface Feature {
  icon: React.ElementType;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: Truck,
    title: "Free Shipping",
    description: "Free shipping on all orders over $50. Fast & reliable delivery to your doorstep.",
  },
  {
    icon: ShieldCheck,
    title: "Secure Payment",
    description: "100% secure checkout with Stripe. Your payment information is always protected.",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Round-the-clock customer support via chat, email, or phone. We're always here.",
  },
  {
    icon: RotateCcw,
    title: "Easy Returns",
    description: "Not satisfied? Return within 30 days for a full refund, no questions asked.",
  },
];

export default function ValueProposition() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Why Shop With Us
          </h2>
          <p className="mt-3 text-lg text-muted">
            We go the extra mile to make your shopping experience seamless.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="group rounded-xl border border-border bg-white p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
              >
                <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 transition-colors duration-300 group-hover:bg-primary/20">
                  <Icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-gray-900">
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
