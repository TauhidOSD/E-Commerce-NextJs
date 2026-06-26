import { Star, Quote } from "lucide-react";

interface Testimonial {
  name: string;
  role: string;
  review: string;
  rating: number;
  initials: string;
  color: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Sarah Mitchell",
    role: "Verified Buyer",
    review:
      "Absolutely love the quality! The running shoes are incredibly comfortable and the shipping was super fast. Will definitely order again.",
    rating: 5,
    initials: "SM",
    color: "bg-primary",
  },
  {
    name: "James Rodriguez",
    role: "Repeat Customer",
    review:
      "The hoodie exceeded my expectations — great material, true to size, and the price was unbeatable. This store is my go-to now.",
    rating: 5,
    initials: "JR",
    color: "bg-emerald-500",
  },
  {
    name: "Emily Chen",
    role: "Verified Buyer",
    review:
      "Ordered the DSLR camera and it arrived perfectly packaged. The checkout process with Stripe was seamless. Highly recommend!",
    rating: 4,
    initials: "EC",
    color: "bg-violet-500",
  },
  {
    name: "Michael Okafor",
    role: "Loyal Customer",
    review:
      "Best online shopping experience I've had. The 24/7 support team helped me pick the perfect laptop. Outstanding service!",
    rating: 5,
    initials: "MO",
    color: "bg-rose-500",
  },
  {
    name: "Aisha Patel",
    role: "Verified Buyer",
    review:
      "The sunglasses look even better in person. Premium quality at an affordable price. Returned another item easily — hassle-free!",
    rating: 5,
    initials: "AP",
    color: "bg-amber-500",
  },
  {
    name: "Daniel Kim",
    role: "First-Time Buyer",
    review:
      "Was skeptical about buying online but the secure payment and fast delivery convinced me. The office chair is amazing quality.",
    rating: 4,
    initials: "DK",
    color: "bg-cyan-500",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${
            i < rating
              ? "fill-accent text-accent"
              : "fill-gray-200 text-gray-200"
          }`}
        />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="bg-surface py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            What Our Customers Say
          </h2>
          <p className="mt-3 text-lg text-muted">
            Real reviews from real shoppers. See why thousands trust us.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="group relative rounded-xl border border-border bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              {/* Quote icon */}
              <Quote className="absolute right-6 top-6 h-8 w-8 text-gray-100 transition-colors duration-300 group-hover:text-primary/10" />

              {/* Stars */}
              <StarRating rating={t.rating} />

              {/* Review text */}
              <p className="mt-4 text-sm leading-relaxed text-gray-600">
                &ldquo;{t.review}&rdquo;
              </p>

              {/* Author */}
              <div className="mt-6 flex items-center gap-3">
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold text-white ${t.color}`}
                >
                  {t.initials}
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">
                    {t.name}
                  </p>
                  <p className="text-xs text-muted">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
