import { Link } from "react-router-dom";
import type { News } from "@/app/slices/api/api.types";

export default function NewsCard({ news }: { news: News }) {
    return (
        <Link to={`/news/${news.id}`} className="block">
            <div className="w-full h-[310px] my-2 lg:my-0 lg:h-[120px] rounded-2xl lg:flex lg:gap-2 border border-gray-300 dark:border-gray-800 overflow-hidden hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors">
                <img src={"/images/placeholder.png"} alt={news.title} className="w-full lg:w-[100px] h-[190px] lg:h-[120px] object-cover lg:rounded-l-2xl bg-gray-300" />
                <div className="flex flex-col p-2 mb-2 lg:mb-0 justify-center">
                    <h2 className="text-lg md:text-xl font-bold leading-tight drop-shadow-lg line-clamp-1">{news.title}</h2>
                    <div className="flex items-center gap-3 my-1">
                        <div className="h-1 w-6 bg-red-600 rounded-full" />
                        <span className="text-gray-300 dark:text-gray-700 text-xs font-bold">{news.reporterName}</span>
                    </div>
                    <p className="text-md md:text-md text-gray-400 dark:text-gray-600 line-clamp-2">
                        {news.body}
                    </p>
                </div>
            </div>
        </Link>
    )
}