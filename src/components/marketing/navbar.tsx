"use client";

import { NAV_LINKS } from "@/constants";
import Link from "next/link";
import Icons from "../global/icons";
import Wrapper from "../global/wrapper";
import { Button } from "../ui/button";
import MobileMenu from "./mobile-menu";

const Navbar = () => {
    const handleScroll = (href: string) => {
        if (href === "/") {
            window.scrollTo({ top: 0, behavior: "smooth" });
            return;
        }
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <header className="sticky top-0 w-full h-16 bg-background/80 backdrop-blur-sm z-50">
            <Wrapper className="h-full">
                <div className="flex items-center justify-between h-full">
                    <div className="flex items-center">
                        <Link href="/" className="flex items-center gap-2">
                            <img src="/icons/icon.png" alt="App Icon" className="w-8" />
                            <span className="text-xl font-semibold hidden lg:block">
                                ViralGenie
                            </span>
                        </Link>
                    </div>

                    <div className="hidden lg:flex items-center gap-4">
                        <ul className="flex items-center gap-8">
                            {NAV_LINKS.map((link, index) => (
                                <li key={index} className="text-sm font-medium -1 link">
                                    <button 
                                        onClick={() => handleScroll(link.href)}
                                        className="hover:text-primary transition-colors"
                                    >
                                        {link.name}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="flex items-center gap-4">
                        <a href="https://app.viralgenie.io" className="hidden lg:block">
                            <Button variant="blue">
                                Start For Free
                            </Button>
                        </a>
                        <MobileMenu />
                    </div>
                </div>
            </Wrapper>
        </header>
    )
};

export default Navbar
