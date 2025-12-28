import React, { useState } from 'react';
import { Send, User, MessageSquare } from 'lucide-react';
import { Button } from "@/components/ui/button";
import CommentList from './CommentList';
import { useTranslation } from 'react-i18next';

interface CommentProps {
    comments: {
        id: number;
        name: string;
        email: string;
        body: string;
    }[];
}

export default function Comments({ comments }: CommentProps) {
    const [commentText, setCommentText] = useState("");
    const { t } = useTranslation()

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!commentText.trim()) return;
        // Logic to submit comment would go here
        console.log("Submitting:", commentText);
        setCommentText("");
    };

    return (
        <div className="mt-8 space-y-6 text-foreground">
            <div className="flex items-center gap-2 mb-4">
                <MessageSquare className="w-6 h-6 text-red-600" />
                <h3 className="text-xl font-bold">{t("detailspage.comments")} ({comments.length})</h3>
            </div>

            {/* Comment Input Section */}
            <form onSubmit={handleSubmit} className="relative group">
                <div className="flex items-start gap-4 p-4 rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 focus-within:ring-2 focus-within:ring-red-500/20 transition-all duration-300 shadow-sm">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-red-500 to-red-700 flex items-center justify-center shrink-0">
                        <User className="text-white w-6 h-6" />
                    </div>
                    <div className="flex-1 flex flex-col gap-3">
                        <textarea
                            value={commentText}
                            onChange={(e) => setCommentText(e.target.value)}
                            placeholder={t("detailspage.commentPlaceholder")}
                            className="w-full bg-transparent border-none outline-none resize-none text-sm md:text-base py-1 scrollbar-none min-h-[40px]"
                            rows={1}
                        />
                        <div className="flex justify-end pt-2 border-t border-gray-100 dark:border-gray-900">
                            <Button
                                type="submit"
                                size="sm"
                                disabled={!commentText.trim()}
                                className="bg-red-600 hover:bg-red-700 text-white rounded-xl px-5 py-2 transition-all active:scale-95 flex items-center gap-2 font-semibold"
                            >
                                {t("detailspage.postComment")} <Send className="w-4 h-4" />
                            </Button>
                        </div>
                    </div>
                </div>
            </form>

            <CommentList comments={comments} />
        </div>
    );
}