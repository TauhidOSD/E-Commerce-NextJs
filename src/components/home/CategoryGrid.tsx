import Image from "next/image";
import Link from "next/link";

interface CategoryItem {
  name: string;
  slug: string;
  image: string;
  label: string;
}

const categories: CategoryItem[] = [
  {
    name: "New Arrivals",
    slug: "all",
    image: "https://images.unsplash.com/photo-1520975916090-3105956dac38?auto=format&fit=crop&w=800&q=80",
    label: "Just Landed",
  },
  {
    name: "Electronics",
    slug: "electronics",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
    label: "Top Tech",
  },
  {
    name: "Fashion",
    slug: "shirts",
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=800&q=80",
    label: "Trending",
  },
  {
    name: "Accessories",
    slug: "accessories",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80",
    label: "Essentials",
  },
];

export default function CategoryGrid() {
  return (
    <section id="categories" className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Shop by Category
          </h2>
          <p className="mt-3 text-lg text-muted">
            Explore our curated collections for every occasion.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((cat) => (
            <Link
              key={cat.slug}
              href={`/?category=${cat.slug}`}
              className="group relative block aspect-[4/5] overflow-hidden rounded-2xl shadow-md"
            >
              {/* Image with hover scale */}
              <Image
                src={cat.image}
                alt={cat.name}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

              {/* Label badge */}
              <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-gray-900 backdrop-blur-sm">
                {cat.label}
              </span>

              {/* Category name */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-xl font-bold text-white">{cat.name}</h3>
                <p className="mt-1 text-sm text-white/70 transition-colors duration-300 group-hover:text-white">
                  Explore Collection →
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
