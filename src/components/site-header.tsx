import { MainNav } from "@/components/main-nav"
import { ModeToggle } from "@/components/mode-toggle"
import { Button } from "@/components/ui/button"


import Search from "@/components/search"
import Link from "next/link"
import { Wishlist } from "./wishlist"


export function SiteHeader() {
    return (
        <header className="sticky top-0 z-50 w-full border-b border-black/10 bg-background backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <nav className="container flex h-[80px] justify-between max-w-screen-2xl items-center">
                <MainNav />
                <Search />
                <Wishlist />
            </nav>
        </header >
    )
}