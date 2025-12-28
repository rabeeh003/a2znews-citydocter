import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, Send } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function Footer() {
    const { t } = useTranslation();

    return (
        <footer className="w-full bg-background border-t border-gray-100 dark:border-gray-900 pt-16 pb-8 mt-20">
            <div className="max-w-7xl mx-auto px-4 lg:px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
                    <div className="flex flex-col gap-6">
                        <Link to="/" className="flex items-center gap-3 group">
                            <div className="bg-gray-300 p-2 rounded-xl group-hover:rotate-12 transition-transform duration-300">
                                <img className="w-8 h-8" src="/images/logo.png" alt="A2Z News" />
                            </div>
                            <h2 className="text-2xl font-black tracking-tight">A2Z<span className="text-red-600">NEWS</span></h2>
                        </Link>
                        <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
                            Bringing you the most accurate and up-to-date news from across the globe. Stay connected, stay informed.
                        </p>
                        <div className="flex items-center gap-3">
                            {[
                                { icon: <Facebook size={18} />, href: "#" },
                                { icon: <Twitter size={18} />, href: "#" },
                                { icon: <Instagram size={18} />, href: "#" },
                                { icon: <Linkedin size={18} />, href: "#" }
                            ].map((social, i) => (
                                <a
                                    key={i}
                                    href={social.href}
                                    className="w-10 h-10 flex items-center justify-center rounded-xl border border-gray-200 dark:border-gray-800 text-gray-400 hover:text-red-600 hover:border-red-600 hover:bg-red-50 dark:hover:bg-red-900/10 transition-all duration-300"
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h3 className="text-sm font-bold uppercase tracking-widest text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                            <span className="h-1.5 w-1.5 bg-red-600 rounded-full"></span>
                            {t("categories.categories")}
                        </h3>
                        <ul className="flex flex-col gap-4">
                            {["sports", "business", "health", "technology", "entertainment"].map((key) => (
                                <li key={key}>
                                    <Link
                                        to="#"
                                        className="text-muted-foreground hover:text-red-600 hover:translate-x-1 transition-all duration-300 flex items-center gap-2 text-sm font-medium"
                                    >
                                        <div className="h-1 w-1 rounded-full bg-gray-300 dark:bg-gray-700"></div>
                                        {t(`categories.${key}`)}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="lg:col-span-1">
                        <h3 className="text-sm font-bold uppercase tracking-widest text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                            <span className="h-1.5 w-1.5 bg-red-600 rounded-full"></span>
                            Stay Updated
                        </h3>
                        <p className="text-muted-foreground text-sm mb-4">
                            Subscribe to our newsletter for the latest updates and breaking news.
                        </p>
                        <div className="relative group">
                            <input
                                type="email"
                                placeholder="Your email address"
                                className="w-full bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-red-600/20 focus:border-red-600 transition-all"
                            />
                            <button className="absolute right-2 top-2 p-1.5 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors">
                                <Send size={16} />
                            </button>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-sm font-bold uppercase tracking-widest text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                            <span className="h-1.5 w-1.5 bg-red-600 rounded-full"></span>
                            Support
                        </h3>
                        <div className="flex flex-col gap-4">
                            <div className="flex items-start gap-4">
                                <div className="p-2.5 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 text-red-600">
                                    <MapPin size={18} />
                                </div>
                                <div>
                                    <p className="text-xs font-bold text-gray-400 uppercase tracking-tighter mb-0.5">Location</p>
                                    <p className="text-sm font-medium text-muted-foreground">123 Media Street, NY</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="p-2.5 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 text-red-600">
                                    <Phone size={18} />
                                </div>
                                <div>
                                    <p className="text-xs font-bold text-gray-400 uppercase tracking-tighter mb-0.5">Call Us</p>
                                    <p className="text-sm font-medium text-muted-foreground">+1 (555) 123-4567</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="p-2.5 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 text-red-600">
                                    <Mail size={18} />
                                </div>
                                <div>
                                    <p className="text-xs font-bold text-gray-400 uppercase tracking-tighter mb-0.5">Email</p>
                                    <p className="text-sm font-medium text-muted-foreground">contact@a2znews.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="pt-8 border-t border-gray-100 dark:border-gray-900 flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex flex-col items-center md:items-start gap-1">
                        <p className="text-sm text-muted-foreground font-medium">
                            © {new Date().getFullYear()} A2Z News Network.
                        </p>
                        <p className="text-[10px] text-gray-400 uppercase tracking-[0.2em] font-bold">
                            Crafted for excellence
                        </p>
                    </div>

                    <div className="flex items-center gap-8">
                        <Link to="#" className="text-xs font-bold uppercase tracking-widest text-muted-foreground hover:text-red-600 transition-colors">Privacy</Link>
                        <Link to="#" className="text-xs font-bold uppercase tracking-widest text-muted-foreground hover:text-red-600 transition-colors">Terms</Link>
                        <Link to="#" className="text-xs font-bold uppercase tracking-widest text-muted-foreground hover:text-red-600 transition-colors">Cookies</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}