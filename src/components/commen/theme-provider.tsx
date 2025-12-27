import { createContext, useContext, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import type { RootState } from "@/app/store"
import { setTheme, type Theme } from "@/app/slices/preference"

type ThemeProviderState = {
    theme: Theme
    setTheme: (theme: Theme) => void
}

const ThemeProviderContext = createContext<ThemeProviderState | null>(null)

export function ThemeProvider({ children }: { children: React.ReactNode }) {
    const dispatch = useDispatch()
    const theme = useSelector((state: RootState) => state.preference.theme)

    useEffect(() => {
        const root = window.document.documentElement

        root.classList.remove("light", "dark")

        if (theme === "system") {
            const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
                ? "dark"
                : "light"
            root.classList.add(systemTheme)
        } else {
            root.classList.add(theme)
        }
    }, [theme])

    const value = {
        theme,
        setTheme: (theme: Theme) => {
            dispatch(setTheme(theme))
        },
    }

    return (
        <ThemeProviderContext.Provider value={value}>
            {children}
        </ThemeProviderContext.Provider>
    )
}

// custom hook for theme change
export const useTheme = () => {
    const context = useContext(ThemeProviderContext)
    if (!context) {
        throw new Error("useTheme must be used within ThemeProvider")
    }
    return context
}
