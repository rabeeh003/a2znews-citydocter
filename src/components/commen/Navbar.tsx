import { useState } from "react"
import { Menu, MapPin, Sun, Moon, Languages } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet"

export default function Navbar() {
    const [theme, setTheme] = useState<"light" | "dark">("light")

    const toggleTheme = (value: "light" | "dark") => {
        setTheme(value)
        document.documentElement.classList.toggle("dark", value === "dark")
    }

    const LeftActions = () => (
        <div className="flex items-center gap-2">
            {/* Language Select */}
            <Select defaultValue="en">
                <SelectTrigger className="w-[120px]">
                    <Languages className="mr-2 h-4 w-4" />
                    <SelectValue placeholder="Language" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="en">English</SelectItem>
                    <SelectItem value="ml">Malayalam</SelectItem>
                    <SelectItem value="ar">Arabic</SelectItem>
                </SelectContent>
            </Select>

            {/* Location Button */}
            <Button variant="outline" size="icon">
                <MapPin className="h-4 w-4" />
            </Button>

            {/* Theme Dropdown */}
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="outline" size="icon">
                        {theme === "dark" ? (
                            <Moon className="h-4 w-4" />
                        ) : (
                            <Sun className="h-4 w-4" />
                        )}
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start">
                    <DropdownMenuItem onClick={() => toggleTheme("light")}>
                        ☀️ Light
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => toggleTheme("dark")}>
                        🌙 Dark
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    )

    return (
        <nav className="w-full p-2 border-b bg-background">
            <div className="mx-auto flex h-16 max-w-7xl items-center justify-between">
                <div className="flex items-center gap-2">
                    <img className="w-20" src="images/logo.png" alt="a2z-logo" />
                    <h1 className="hidden lg:block text-2xl font-bold">A2Z News</h1>
                </div>

                <LeftActions />
            </div>
        </nav>
    )
}
