import { getDirectionByLang } from "@/i18n/languageConfig";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function ChevronIcon({ className, right }: { className?: string, right?: boolean }) {
    const { i18n } = useTranslation()
    const isRTL = getDirectionByLang(i18n.language) === 'rtl'

    const Icon = isRTL
        ? (right ? ChevronLeft : ChevronRight)
        : (right ? ChevronRight : ChevronLeft);

    return <Icon className={className} />
}