import MainNews from "@/components/home/MainNews";
import Categories from "../components/home/Categories";
import NewsCard from "@/components/home/NewsCard";

import { useEffect } from "react";
import type { News } from "@/app/slices/api/api.types";
import { fetchNews } from "@/app/slices/api/api.thunks";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import {
    selectNews,
    selectApiLoading,
} from '@/app/slices/api/api.selectors'

export default function HomePage() {
    const dispatch = useAppDispatch()
    const news = useAppSelector(selectNews)
    const loading = useAppSelector(selectApiLoading)

    useEffect(() => {
        dispatch(fetchNews())
    }, [dispatch])

    const bannerNews = [
        {
            id: 1,
            title: "News 1",
            image: "https://media.assettype.com/gulfnews/2025-12-24/3jevqfz2/Indigo-new.jpg",
            body: "Body 1",
            reporter: "Reporter 1",
        },
        {
            id: 2,
            title: "News 2",
            reporter: "Reporter 2",
            body: "Body 2",
        },
        {
            id: 3,
            title: "News 3",
            reporter: "Reporter 3",
            body: "Body 3",
        },
    ];

    return (
        <>
            <div className="sticky top-1 z-50 px-2 w-full flex items-center justify-center">
                <Categories />
            </div>
            <div className="px-2 pt-3 max-w-7xl mx-auto lg:flex gap-2">
                <div className="lg:w-[80%]">
                    <MainNews news={bannerNews} />
                    <h2 className="font-semibold text-xl mt-5 mb-2">Latest News</h2>
                    <div className="lg:grid lg:grid-cols-2 gap-2">
                        {loading ? (
                            <p>Loading...</p>
                        ) : (
                            news.map((newsItem: News) => (
                                <NewsCard key={newsItem.id} news={newsItem} />
                            ))
                        )}
                    </div>
                </div>
                <div className="hidden lg:block sticky top-10 lg:w-[20%]">
                    <div className="flex items-center gap-2 border border-gray-300 dark:border-gray-800 p-2 rounded-2xl">
                        <img src="/images/papericon.png" alt="" className="w-15 h-15" />
                        <div>
                            <h2 className="font-semibold text-xl">E Newspaper</h2>
                            <p className="text-gray-500">Read</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}