import { Skeleton } from "../ui/skeleton";

export default function NewsCardSkeleton() {
    return (
        <div className="grid w-full lg:grid-cols-2 gap-2">
            {Array.from({ length: 6 }).map((_, index) => (
                <div key={index} className="flex flex-col lg:flex-row space-y-3 lg:space-y-0">
                    <Skeleton className="h-[200px] lg:h-[100px] w-full lg:w-[30%] rounded-xl" />
                    <div className="space-y-2 lg:w-[70%]">
                        <Skeleton className="h-5 w-full" />
                        <Skeleton className="h-4 w-full" />
                        <Skeleton className="h-4 w-full" />
                    </div>
                </div>
            ))}
        </div>
    )
}