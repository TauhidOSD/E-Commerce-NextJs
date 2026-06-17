"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Link from "next/link";

export default function HeroSlider() {
   const slides = [
  {
    image:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1800&q=80",
    title: "Big Fashion Winter Sale",
    desc: "Trendy outfits, jackets & lifestyle essentials up to 70% OFF",
    btn: "Shop Fashion",
    link: "/product?category=fashion",
  },
  {
    image:
      "https://images.unsplash.com/photo-1520975916090-3105956dac38?auto=format&fit=crop&w=1800&q=80",
    title: "New Arrival Collection 2026",
    desc: "Explore premium quality fashion, shoes & accessories",
    btn: "Explore Collection",
    link: "/product?category=new",
  },
  {
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1800&q=80",
    title: "Electronics Mega Deals",
    desc: "Smartphones, laptops & gadgets at unbeatable prices",
    btn: "Buy Electronics",
    link: "/product?category=electronics",
  },
];

  return (
    <div className="relative w-full overflow-hidden">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        loop={true}
        speed={900}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        navigation={true}
        className="w-full h-[450px] md:h-[550px]"
        style={
          {
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "#fff",
          } as React.CSSProperties
        }
      >
        {slides.map((item, i) => (
          <SwiperSlide key={i}>
            {/* Background */}
            <div
              className="relative w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${item.image})` }}
            >
              {/* Dark overlay */}
              <div className="absolute inset-0 bg-black/50"></div>

              {/* Content */}
              <div className="relative z-10 h-full flex items-center px-6 md:px-20">
                <div className="max-w-xl text-white">
                  <h1 className="text-3xl md:text-6xl font-bold">
                    {item.title}
                  </h1>

                  <p className="mt-4 text-gray-200 text-sm md:text-lg">
                    {item.desc}
                  </p>

                   <button
                    onClick={() => {
                        document.getElementById("products")?.scrollIntoView({
                    behavior: "smooth",
                    block: "center",
                    });
                    }}
                    className="mt-6 px-6 py-3 bg-red-500 hover:bg-red-600 transition rounded-md"
                    >
                    {item.btn}
                    </button>


                
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}