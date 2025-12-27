import NewsCard from "@/components/home/NewsCard";
import { useEffect, useState } from "react";
import type { News } from "@/app/slices/api/api.types";
import { fetchNews } from "@/app/slices/api/api.thunks";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import {
    selectNews,
    selectApiLoading,
} from '@/app/slices/api/api.selectors'
import { ChevronRight } from "lucide-react";
import axios from "axios";
import type { DetailedNews } from "@/utils/types";

export default function NewsDetailsPage({ id }: { id: number }) {
    const dispatch = useAppDispatch()
    const news = useAppSelector(selectNews)
    const loading = useAppSelector(selectApiLoading)
    const [newsDetails, setNewsDetails] = useState<DetailedNews>()
    const [comments, setComments] = useState([])

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(response => {
                setNewsDetails(response.data)
            })
            .catch(error => {
                console.log(error)
            })
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
            .then(response => {
                setComments(response.data)
            })
            .catch(error => {
                console.log(error)
            })

    }, [])

    useEffect(() => {
        dispatch(fetchNews())
    }, [dispatch])

    return (
        <>
            {/* <div className="sticky top-1 z-50 px-2 w-full flex items-center justify-center">
                <Categories />
            </div> */}
            <div className="px-2 pt-3 max-w-7xl mx-auto lg:flex gap-2 pb-2">
                <div className="lg:w-[80%] ">
                    {newsDetails ? (
                        <div>
                            <img src={newsDetails?.image || '/images/placeholder.png'} alt="" className="w-full rounded-2xl" />
                            <h2 className="font-semibold text-2xl">{newsDetails?.title}</h2>
                            <p className="text-gray-500">{newsDetails?.body}</p>
                        </div>
                    ) : (
                        <p>Loading...</p>
                    )}
                    <div className="my-2">
                        <img src="https://www.shutterstock.com/image-illustration/delicious-food-menu-banner-asian-260nw-2266341803.jpg" alt="" className="w-full rounded-2xl" />
                    </div>
                    <div className="flex items-center justify-between gap-2 mt-5 mb-2">
                        <span className="font-semibold text-2xl">More News</span>
                        <span className="cursor-pointer bg-red-600 p-2 rounded-full">
                            <ChevronRight className="h-4 w-4 text-white" />
                        </span>
                    </div>
                    <div className="lg:grid lg:grid-cols-2 gap-2">
                        {loading ? (
                            <p>Loading...</p>
                        ) : (
                            news.slice(12, 18).map((newsItem: News) => (
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