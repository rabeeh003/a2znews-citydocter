
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import type { News } from '@/app/slices/api';

const MainNews: React.FC<{ news: News[] }> = ({ news }) => {
    return (
        <div className="w-full h-[400px] md:h-[400px] relative">
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={0}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                className="h-full w-full rounded-2xl overflow-hidden"
            >
                {news.map((item) => (
                    <SwiperSlide key={item.id}>
                        <div className="relative w-full h-full group cursor-pointer">
                            <img
                                src={item.image || "/images/placeholder.png"}
                                alt={item.title}
                                className="w-full h-full object-cover transition-transform duration-700 bg-gray-300 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent flex flex-col justify-end p-6 md:p-12 text-white">
                                <div className="max-w-4xl">
                                    <h2 className="text-2xl md:text-5xl font-bold mb-4 leading-tight drop-shadow-lg">
                                        {item.title}
                                    </h2>
                                    <div className="flex items-center gap-3">
                                        <div className="h-1 w-12 bg-red-600 rounded-full" />
                                        <p className="text-sm md:text-base font-medium text-gray-200 uppercase tracking-widest">
                                            Reported by <span className="text-white font-bold">{item.reporterName}</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default MainNews;
