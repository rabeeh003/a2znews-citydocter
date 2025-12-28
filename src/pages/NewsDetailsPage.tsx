import NewsCard from "@/components/home/NewsCard";
import Comments from "@/components/news-details/Comment";
import { useEffect } from "react";
import type { News } from "@/app/slices/api/api.types";
import { useGetNewsQuery, useGetNewsByIdQuery, useGetCommentsByNewsIdQuery } from "@/app/slices/api/newsApi";
import { ChevronRight } from "lucide-react";

import { useParams } from "react-router-dom";
import Categories from "@/components/home/Categories";
import { Skeleton } from "@/components/ui/skeleton";
import NewsCardSkeleton from "@/components/home/NewsCardSkeleton";
import AutherInfo from "@/components/news-details/AutherInfo";

export default function NewsDetailsPage() {
    const { id } = useParams<{ id: string }>()
    const numericId = id ? parseInt(id) : 0

    const { data: newsDetails, isLoading: isNewsLoading } = useGetNewsByIdQuery(numericId, { skip: !numericId })
    const { data: comments = [] } = useGetCommentsByNewsIdQuery(numericId, { skip: !numericId })
    const { data: news = [], isLoading: loading } = useGetNewsQuery()

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id])

    return (
        <>
            <div className="sticky top-1 z-50 px-2 w-full flex items-center justify-center">
                <Categories home={true} />
            </div>
            <div className="px-2 pt-3 max-w-7xl mx-auto lg:flex gap-2 pb-2">
                <div className="lg:w-[80%] ">
                    {!isNewsLoading && newsDetails ? (
                        <div>
                            <img src={newsDetails?.image || '/images/placeholder.png'} alt="" className="w-full rounded-2xl h-full max-h-[400px] object-contain bg-gray-300" />
                            <h2 className="font-semibold text-2xl">{newsDetails?.title}</h2>
                            <p className="text-gray-500">{newsDetails?.body}</p>
                        </div>
                    ) : (
                        <div className="flex flex-col space-y-3">
                            <Skeleton className="h-[200px] w-full rounded-xl" />
                            <div className="space-y-2">
                                <Skeleton className="h-4 w-full" />
                                <Skeleton className="h-4 w-full" />
                                <Skeleton className="h-4 w-full" />
                                <Skeleton className="h-4 w-full" />
                                <Skeleton className="h-4 w-full" />
                            </div>
                        </div>
                    )}
                    {!isNewsLoading && newsDetails?.reporter && (
                        <AutherInfo reporter={newsDetails.reporter} />
                    )}
                    <Comments comments={comments} />
                    <div className="my-2">
                        <img src="https://www.shutterstock.com/image-illustration/delicious-food-menu-banner-asian-260nw-2266341803.jpg" alt="" className="w-full rounded-2xl h-48 object-cover" />
                    </div>
                    <div className="flex items-center justify-between gap-2 mt-5 mb-2">
                        <span className="font-semibold text-2xl">More News</span>
                        <span className="cursor-pointer bg-red-600 p-2 rounded-full">
                            <ChevronRight className="h-4 w-4 text-white" />
                        </span>
                    </div>
                    <div className="lg:grid lg:grid-cols-2 gap-2">
                        {loading ? (
                            <NewsCardSkeleton />
                        ) : (
                            news.slice(20, 24).map((newsItem: News) => (
                                <NewsCard key={newsItem.id} news={newsItem} />
                            ))
                        )}
                    </div>
                </div>
                <div className="hidden lg:block sticky top-16 lg:w-[20%] h-fit">
                    <div className="flex items-center gap-2 border border-gray-300 dark:border-gray-800 p-2 rounded-2xl">
                        <img src="/images/papericon.png" alt="" className="w-15 h-15" />
                        <div>
                            <h2 className="font-semibold text-xl">E Newspaper</h2>
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