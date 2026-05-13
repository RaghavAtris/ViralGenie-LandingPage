"use client";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { NAV_LINKS } from "@/constants";
import { Menu } from "lucide-react";
import Link from "next/link";

const MobileMenu = () => {
    const handleScroll = (href: string) => {
        if (href.startsWith('#')) {
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            }
        } else if (href.startsWith('/')) {
            window.location.href = href;
        }
    };

    return (
        <Sheet>
            <SheetTrigger asChild className="lg:hidden">
                <Button variant="ghost" size="icon" className="lg:hidden">
                    <Menu className="h-6 w-6" />
                </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full sm:w-[300px] pt-12">
                <SheetHeader className="mb-8">
                    <SheetTitle className="text-left">Menu</SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col space-y-4">
                    {NAV_LINKS.map((link, index) => (
                        link.name === "Features" ? (
                            <Link
                                key={index}
                                href="/#features"
                                className="text-base font-medium transition-colors hover:text-primary text-left"
                            >
                                {link.name}
                            </Link>
                        ) : link.name === "Pricing" ? (
                            <Link
                                key={index}
                                href="/#pricing"
                                className="text-base font-medium transition-colors hover:text-primary text-left"
                            >
                                {link.name}
                            </Link>
                        ) : (
                            link.href.startsWith("/") ? (
                                <Link
                                    key={index}
                                    href={link.href}
                                    className="text-base font-medium transition-colors hover:text-primary text-left"
                                >
                                    {link.name}
                                </Link>
                            ) : (
                        <button
                            key={index}
                            onClick={() => handleScroll(link.href)}
                            className="text-base font-medium transition-colors hover:text-primary text-left"
                        >
                            {link.name}
                        </button>
                            )
                        )
                    ))}
                    <div className="pt-4 mt-4 border-t border-border">
                        <a href="https://app.viralgenie.io" className="w-full">
                            <Button className="w-full" variant="white">
                                Start For Free
                            </Button>
                        </a>
                    </div>
                </nav>
            </SheetContent>
        </Sheet>
    )
};

export default MobileMenu
