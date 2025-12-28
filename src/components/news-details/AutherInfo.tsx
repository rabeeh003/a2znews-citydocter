import { CalendarIcon, MapPin, Phone, Globe, Mail, Building2, MoreVertical } from "lucide-react"
import {
    Avatar,
    AvatarFallback,
} from "@/components/ui/avatar"
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card"
import type { User } from "@/app/slices/api/api.types"

export default function AutherInfo({ reporter }: { reporter: User }) {
    if (!reporter) return null;

    const initials = reporter.name
        .split(" ")
        .map((n) => n[0])
        .join("")
        .toUpperCase();

    return (
        <div className="flex items-center justify-between p-4 mt-3 rounded-2xl border border-gray-100 dark:border-gray-900 bg-gray-50/50 dark:bg-gray-900/30 hover:bg-gray-50 dark:hover:bg-gray-900/50 transition-all duration-300 group mb-6">
            <HoverCard>
                <HoverCardTrigger asChild>
                    <div className="flex items-center gap-3 cursor-pointer">
                        <Avatar className="h-12 w-12 border-2 border-white dark:border-gray-800 shadow-sm ring-2 ring-red-600/10">
                            <AvatarFallback className="bg-red-50 text-red-600 font-bold dark:bg-red-900/20 dark:text-red-400">
                                {initials}
                            </AvatarFallback>
                        </Avatar>
                        <div className="flex flex-col">
                            <h4 className="text-sm font-bold text-gray-900 dark:text-gray-100 group-hover:text-red-600 transition-colors">
                                {reporter.name}
                            </h4>
                            <p className="text-[11px] text-gray-500 font-medium flex items-center gap-1">
                                <Mail className="w-3 h-3" />
                                {reporter.email}
                            </p>
                        </div>
                    </div>
                </HoverCardTrigger>
                <HoverCardContent className="w-80 p-0 overflow-hidden rounded-2xl border-none shadow-2xl">
                    <div className="bg-red-600 h-20 w-full relative">
                        <div className="absolute -bottom-6 left-6">
                            <Avatar className="h-16 w-16 border-4 border-white dark:border-gray-950 shadow-md">
                                <AvatarFallback className="bg-gray-100 font-bold">{initials}</AvatarFallback>
                            </Avatar>
                        </div>
                    </div>
                    <div className="pt-8 pb-6 px-6 bg-white dark:bg-gray-950">
                        <div className="mb-4">
                            <h4 className="text-lg font-bold">@{reporter.username}</h4>
                            <p className="text-sm text-gray-500 font-medium">{reporter.company.catchPhrase}</p>
                        </div>

                        <div className="space-y-3">
                            <div className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-400">
                                <Building2 className="w-4 h-4 text-red-500" />
                                <span className="font-medium text-gray-900 dark:text-gray-100">{reporter.company.name}</span>
                            </div>
                            <div className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-400">
                                <Globe className="w-4 h-4 text-red-500" />
                                <a href={`https://${reporter.website}`} target="_blank" rel="noreferrer" className="hover:text-red-600 transition-colors">
                                    {reporter.website}
                                </a>
                            </div>
                            <div className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-400">
                                <Phone className="w-4 h-4 text-red-500" />
                                <span>{reporter.phone}</span>
                            </div>
                            <div className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-400">
                                <MapPin className="w-4 h-4 text-red-500" />
                                <span>{reporter.address.city}, {reporter.address.street}</span>
                            </div>
                        </div>

                        <div className="mt-6 pt-4 border-t border-gray-100 dark:border-gray-900 flex items-center gap-2 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                            <CalendarIcon className="w-3 h-3" />
                            Verfied Reporter
                        </div>
                    </div>
                </HoverCardContent>
            </HoverCard>

            <button className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-xl transition-all">
                <MoreVertical className="w-5 h-5" />
            </button>
        </div>
    )
}