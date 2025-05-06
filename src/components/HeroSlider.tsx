'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import Image from 'next/image';

const heroSlides = [
  {
    title: "Winter's weekend",
    subtitle: 'keep it casual',
    image: 'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/66/1311391/1.jpg?5993',
    bg: 'bg-yellow-200',
  },
  {
    title: 'Summer Vibes',
    subtitle: 'light & comfy',
    image: 'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/69/9440104/1.jpg?5885',
    bg: 'bg-pink-100',
  },
  {
    title: 'Bold Fashion',
    subtitle: 'be fearless',
    image: '/assets/jogger.jpg',
    bg: 'bg-blue-100',
  },
];

export default function HeroSlider() {
  return (
    <div className="w-full max-w-5xl mx-auto px-4 mt-4">
      <Swiper
        modules={[Navigation, Autoplay]}
        autoplay={{ delay: 3000 }}
        navigation
        loop
        spaceBetween={20}
        className="rounded-2xl overflow-hidden"
      >
        {heroSlides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className={`flex items-center justify-between p-6 rounded-2xl ${slide.bg}`}
            >
              <div>
                <h2 className="text-2xl font-semibold">{slide.title}</h2>
                <p className="text-sm text-gray-600">{slide.subtitle}</p>
              </div>
              <Image
                src={slide.image}
                alt={slide.title}
                width={150}
                height={150}
                className="rounded-full object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
