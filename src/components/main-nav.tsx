"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { LineChart, ShoppingBasket, Tag, Telescope } from "lucide-react"
import { cn } from "@/lib/utils"
import { Tooltip, TooltipContent, TooltipTrigger, TooltipProvider } from "./ui/tooltip"


export function MainNav() {
    const pathname = usePathname()

    return (
        <div className="hidden md:flex w-full md:w-1/3">
            <Link href="/" className="mr-6 flex items-center space-x-2">
                <ShoppingBasket className="w-7 h-7" />
                <span className="hidden font-bold text-xl sm:inline-block">
                    marketmatchup
                </span>
            </Link>
            <nav className="flex items-center gap-4 text-base lg:gap-6">
                <Link
                    href="/explore"
                    className={cn(
                        "flex items-center transition-colors hover:text-foreground/80",
                        pathname === "/explore" ? "text-foreground" : "text-foreground/60"
                    )}
                >
                    <Telescope className="h-4 w-4 mr-[5px]" />Explore
                </Link>
                <Link
                    href="/deals"
                    className={cn(
                        "flex items-center transition-colors hover:text-foreground/80",
                        pathname?.startsWith("/deals")
                            ? "text-foreground"
                            : "text-foreground/60"
                    )}
                >
                    <Tag className="h-4 w-4 mr-[5px]" />Deals
                </Link>
            </nav>
        </div>
    )
}