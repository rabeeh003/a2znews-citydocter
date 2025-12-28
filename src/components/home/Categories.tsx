import { Search, Shapes } from "lucide-react"
import { useTranslation } from "react-i18next"
import { Link } from "react-router-dom"
import ChevronIcon from "../commen/ChevronIcon"

export default function Categories({ home }: { home?: boolean }) {
    const { i18n } = useTranslation()


    return (
        <div className="flex w-full border border-gray-200/50 dark:border-gray-500/50 rounded-2xl gap-2 justify-between max-w-7xl p-1 backdrop-blur-md bg-white/10 dark:bg-black/10 z-50 transition-all">
            <div className="flex gap-2">
                {home && (
                    <>
                        <Link to="/" className="flex items-center bg-red-600 px-2 rounded-xl">
                            <ChevronIcon className="h-6 text-yellow-500" />
                        </Link>
                    </>
                )}
                <div className="hidden lg:flex items-center gap-2 border border-red-200 dark:border-red-800 px-2 rounded-xl">
                    <Search className="h-6 text-yellow-500" />
                    <input type="text" placeholder={i18n.t("searchPlaceholder")} />
                </div>
                <div className="flex items-center gap-2 bg-red-600 px-2 rounded-xl">
                    <Shapes className="h-6 w-6 text-yellow-500" />
                    <p className="font-semibold text-white hidden lg:block">{i18n.t("categories.explore")}</p>
                </div>
            </div>
            <div className="flex gap-4 overflow-x-auto no-scrollbar font-semibold py-2 px-2">
                <div className="cursor-pointer">{i18n.t("categories.sports")}</div> <span className="font-normal text-gray-300 dark:text-gray-500">|</span>
                <div className="cursor-pointer">{i18n.t("categories.business")}</div> <span className="font-normal text-gray-300 dark:text-gray-500">|</span>
                <div className="cursor-pointer">{i18n.t("categories.health")}</div> <span className="font-normal text-gray-300 dark:text-gray-500">|</span>
                <div className="cursor-pointer">{i18n.t("categories.technology")}</div> <span className="font-normal text-gray-300 dark:text-gray-500">|</span>
                <div className="cursor-pointer">{i18n.t("categories.entertainment")}</div>
            </div>
        </div>
    )
}
