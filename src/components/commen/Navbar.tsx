import { Sun, Moon, Languages } from "lucide-react"
import { useTranslation } from "react-i18next"
import { DropdownSearch } from "./dropdown-search"
import { AllLanguages } from "@/i18n"
import { Switch } from "@radix-ui/react-switch"
import { useTheme } from "./theme-provider"
import { Link } from "react-router-dom"

export default function Navbar() {
    const { i18n } = useTranslation()
    const { theme, setTheme } = useTheme()

    const LeftActions = () => (
        <div className="flex items-center gap-2">
            <DropdownSearch icon={<Languages />} listItems={AllLanguages} value={i18n.language} setValue={(value) => i18n.changeLanguage(value)} />

            {/* <Button variant="outline" size="icon">
                <MapPin className="h-4 w-4" />
            </Button> */}

            <Switch
                checked={theme === "dark"}
                onCheckedChange={(checked) =>
                    setTheme(checked ? "dark" : "light")
                }
                className="relative h-8 w-14 rounded-full flex items-center px-1
    data-[state=checked]:bg-red-600
    data-[state=unchecked]:bg-yellow-400
    data-[state=checked]:justify-end
    data-[state=unchecked]:justify-start"

            >
                <span
                    className="pointer-events-none flex h-6 w-6 items-center justify-center rounded-full bg-white shadow-md transition-transform"
                >
                    {theme === "dark" ? (
                        <Moon className="h-4 w-4 text-red-600" />
                    ) : (
                        <Sun className="h-4 w-4 text-yellow-500" />
                    )}
                </span>
            </Switch>

        </div>
    )

    const RightSection = () => (
        <div className="flex items-center gap-2">
            <p className="text-4xl font-bold">26</p>
            <div className="flex flex-col">
                <p className="text-sm font-semibold">Saturday</p>
                <p className="text-xs font-semibold">Dec | 2025</p>
            </div>
        </div>
    )

    return (
        <nav className="w-full p-2 bg-background">
            <div className="mx-auto flex justify-between lg:grid h-16 max-w-7xl lg:grid-cols-3 items-center">
                <div className="hidden lg:flex justify-start">
                    <RightSection />
                </div>

                <Link to="/" className="flex justify-center items-center gap-2">
                    <img className="w-20" src="/images/logo.png" alt="a2z-logo" />
                    <h1 className="hidden lg:block text-2xl font-bold">A2Z News</h1>
                </Link>

                <div className="lg:flex justify-end">
                    <LeftActions />
                </div>
            </div>
        </nav>

    )
}
