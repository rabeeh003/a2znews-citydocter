import MainNews from "@/components/home/MainNews";
import Categories from "../components/home/Categories";
import NewsCard from "@/components/home/NewsCard";

import type { News } from "@/app/slices/api/api.types";
import { useGetNewsQuery } from "@/app/slices/api/newsApi";
import { ChevronRight } from "lucide-react";
import NewsCardSkeleton from "@/components/home/NewsCardSkeleton";

export default function HomePage() {
    const { data: news = [], isLoading: loading } = useGetNewsQuery()

    const bannerNews: News[] = [
        {
            id: 1,
            title: "News 1",
            image: "https://media.assettype.com/gulfnews/2025-12-24/3jevqfz2/Indigo-new.jpg",
            body: "Body 1",
            reporterName: "Reporter 1",
            reporterId: 1,
        },
        {
            id: 2,
            title: "News 2",
            reporterName: "Reporter 2",
            body: "Body 2",
            reporterId: 1,
        },
        {
            id: 3,
            title: "News 3",
            reporterName: "Reporter 3",
            body: "Body 3",
            reporterId: 1,
        },
    ];

    return (
        <>
            <div className="sticky top-1 z-50 px-2 w-full flex items-center justify-center">
                <Categories />
            </div>
            <div className="px-2 pt-3 max-w-7xl mx-auto lg:flex gap-2 pb-2">
                <div className="lg:w-[80%] ">
                    <MainNews news={bannerNews} />
                    <div className="flex items-center justify-between gap-2 mt-5 mb-2">
                        <span className="font-semibold text-2xl">Latest News</span>
                        <span className="cursor-pointer bg-red-600 p-2 rounded-full">
                            <ChevronRight className="h-4 w-4 text-white" />
                        </span>
                    </div>
                    {loading ? (
                        <NewsCardSkeleton />
                    ) : (
                        <div className="lg:grid lg:grid-cols-2 gap-2">
                            {news.slice(0, 6).map((newsItem: News) => (
                                <NewsCard key={newsItem.id} news={newsItem} />
                            ))}
                        </div>
                    )}
                    <div className="my-2 ">
                        <img src="https://scontent.fdxb3-1.fna.fbcdn.net/v/t39.30808-6/468646912_122137294838378720_4822767146884001677_n.jpg?stp=dst-jpg_s960x960_tt6&_nc_cat=109&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=YSvS9BQJc0wQ7kNvwHJsOfT&_nc_oc=AdkJgvjbw00Vf8rhLDmLGqwqZbzCvnxkdslvke7KDb4UNmGUKbXYlPRRtUDrEKQYtVg&_nc_zt=23&_nc_ht=scontent.fdxb3-1.fna&_nc_gid=Fbc05g_Y4jNHpTMTBbaDXA&oh=00_AfmUSMjGJ2C9Arvru3Y7Gai_v3I82CpZi-3bhv22mbRgTQ&oe=695600C4" alt="" className="w-full rounded-2xl" />
                    </div>
                    <div className="flex items-center justify-between gap-2 mt-5 mb-2">
                        <span className="font-semibold text-2xl">Sports News</span>
                        <span className="cursor-pointer bg-red-600 p-2 rounded-full">
                            <ChevronRight className="h-4 w-4 text-white " />
                        </span>
                    </div>
                    {loading ? (
                        <NewsCardSkeleton />
                    ) : (
                        <div className="lg:grid lg:grid-cols-2 gap-2">
                            {news.slice(6, 12).map((newsItem: News) => (
                                <NewsCard key={newsItem.id} news={newsItem} />
                            ))}
                        </div>
                    )}
                    <div className="my-2">
                        <img src="https://www.shutterstock.com/image-illustration/delicious-food-menu-banner-asian-260nw-2266341803.jpg" alt="" className="w-full rounded-2xl h-48 object-cover" />
                    </div>
                    <div className="flex items-center justify-between gap-2 mt-5 mb-2">
                        <span className="font-semibold text-2xl">Business News</span>
                        <span className="cursor-pointer bg-red-600 p-2 rounded-full">
                            <ChevronRight className="h-4 w-4 text-white" />
                        </span>
                    </div>
                    {loading ? (
                        <NewsCardSkeleton />
                    ) : (
                        <div className="lg:grid lg:grid-cols-2 gap-2">
                            {news.slice(12, 18).map((newsItem: News) => (
                                <NewsCard key={newsItem.id} news={newsItem} />
                            ))}
                        </div>
                    )}
                </div>
                <div className="hidden lg:block sticky top-16 lg:w-[20%] h-fit">
                    <div className="flex items-center gap-2 border border-gray-300 dark:border-gray-800 p-2 rounded-2xl">
                        <img src="/images/papericon.png" alt="" className="w-15 h-15" />
                        <div>
                            <h2 className="font-semibold text-xl">E-Newspaper</h2>
                            <p className="text-gray-500">Read</p>
                        </div>
                    </div>
                    <div className="p-1 my-2 border border-gray-300 dark:border-gray-800 rounded-2xl">
                        <img src="https://offersinme.in/catalogue/2022/05/27/8407/8407-0-noon-big-grocery-sale.jpg" alt="" className="w-full rounded-2xl" />
                    </div>
                </div>
            </div>
        </>
    )
}