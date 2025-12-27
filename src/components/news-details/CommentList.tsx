import { useState } from 'react';
import { MoreVertical, ChevronDown } from 'lucide-react';
import { Button } from "@/components/ui/button";

interface Comment {
    id: number;
    name: string;
    email: string;
    body: string;
}

interface CommentListProps {
    comments: Comment[];
}

export default function CommentList({ comments }: CommentListProps) {
    const [visibleCount, setVisibleCount] = useState(2);

    const handleLoadMore = () => {
        setVisibleCount(prevCount => prevCount + 5);
    };

    const visibleComments = comments.slice(0, visibleCount);
    const hasMore = visibleCount < comments.length;

    return (
        <div className="space-y-4 max-w-[95vw]">
            <div className="space-y-4">
                {visibleComments.map((comment) => (
                    <div key={comment.id} className="p-4 rounded-2xl border border-gray-100 dark:border-gray-900 bg-gray-50/50 dark:bg-gray-900/30 hover:bg-gray-50 dark:hover:bg-gray-900/50 transition-colors group">
                        <div className="flex justify-between items-start">
                            <div className="flex gap-3">
                                <div className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center shrink-0">
                                    <span className="text-xs font-bold text-gray-500 uppercase">
                                        {comment.email.substring(0, 2)}
                                    </span>
                                </div>
                                <div className="flex-1 min-w-0">
                                    <h4 className="font-bold text-sm text-gray-900 dark:text-gray-100 line-clamp-1 ">
                                        {comment.name}
                                    </h4>
                                    <p className="text-[10px] text-gray-500 font-medium line-clamp-1">{comment.email}</p>
                                </div>
                            </div>
                            <button className="text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity p-1 hover:bg-gray-200 dark:hover:bg-gray-800 rounded-lg">
                                <MoreVertical className="w-4 h-4" />
                            </button>
                        </div>
                        <p className="mt-3 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                            {comment.body}
                        </p>
                    </div>
                ))}
            </div>

            {hasMore && (
                <div className="flex justify-center pt-2">
                    <Button
                        variant="ghost"
                        onClick={handleLoadMore}
                        className="text-gray-500 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-950/20 gap-2 text-xs font-semibold px-6"
                    >
                        Load More Comments ({comments.length - visibleCount} left)
                        <ChevronDown className="w-4 h-4" />
                    </Button>
                </div>
            )}
        </div>
    );
}
