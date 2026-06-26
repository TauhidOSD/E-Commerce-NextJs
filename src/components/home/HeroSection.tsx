import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-black/1.5 ">
      <div className="mx-auto flex max-w-7xl flex-col-reverse items-center gap-12 px-4 py-12 sm:px-6 md:flex-row md:py-12 lg:px-8">
        {/* ── Left Column: Copy ── */}
        <div className="flex-1 text-center md:text-left">
          <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold tracking-wide text-primary">
            New Season 2026
          </span>
          <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
            Elevate Your
            <span className="block text-primary">Everyday Style</span>
          </h1>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted">
            Discover curated collections of premium essentials — from
            fashion-forward apparel to cutting-edge electronics, all in one
            place.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 md:justify-start">
            <Link
              href="/#products"
              className="group inline-flex items-center gap-2 rounded-lg bg-gray-900  px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-primary/25 transition-all duration-300 hover:scale-105 hover:bg-gray-800 hover:shadow-xl hover:shadow-primary/30"
            >
              Shop Now
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <Link
              href="/#categories"
              className="inline-flex items-center gap-2 rounded-lg border border-border px-8 py-3.5 text-sm font-semibold text-gray-700 transition-all duration-300 hover:border-primary hover:text-primary"
            >
              Browse Categories
            </Link>
          </div>

          {/* ── Trust badges ── */}
          <div className="mt-10 flex items-center justify-center gap-6 text-sm text-muted md:justify-start">
            <span className="flex items-center gap-1.5">
              <span className="inline-block h-2 w-2 rounded-full bg-green-500" />
              Free Shipping
            </span>
            <span className="flex items-center gap-1.5">
              <span className="inline-block h-2 w-2 rounded-full bg-green-500" />
              30-Day Returns
            </span>
            <span className="flex items-center gap-1.5">
              <span className="inline-block h-2 w-2 rounded-full bg-green-500" />
              Secure Payment
            </span>
          </div>
        </div>

        {/* ── Right Column: Hero Image + Blob ── */}
        <div className="relative flex flex-1 items-center justify-center">
          {/* Decorative blob */}
          <div className="absolute -right-10 -top-10 h-72 w-72 animate-float rounded-full  from-primary/20 via-purple-400/20 to-accent/20 blur-3xl sm:h-96 sm:w-96" />
          <div className="absolute -bottom-8 -left-8 h-56 w-56 animate-float rounded-full bg-gradient-to-tr from-accent/20 via-pink-400/15 to-primary/20 blur-2xl sm:h-72 sm:w-72" style={{ animationDelay: "3s" }} />

          {/* Product image container */}
          <div className="relative z-10 w-full max-w-md overflow-hidden rounded-2xl shadow-2xl">
            <Image
              src="https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=800&q=80"
              alt="Hero fashion collection"
              width={800}
              height={800}
              className="h-auto w-full object-cover"
              priority
            />
            {/* Floating price tag */}
            <div className="absolute bottom-4 left-4 rounded-lg bg-white/90 px-4 py-2 shadow-lg backdrop-blur-sm">
              <p className="text-xs text-muted">Starting from</p>
              <p className="text-lg font-bold text-gray-900">$9.00</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
