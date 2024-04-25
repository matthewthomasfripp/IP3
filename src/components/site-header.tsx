import MainNav from '@/components/main-nav'
import Search from '@/components/search'
import Wishlist from './wishlist'

export default function SiteHeader() {
  return (
    <header className='sticky top-0 z-50 w-full border-b border-black/10 bg-background backdrop-blur supports-[backdrop-filter]:bg-background/60'>
      <nav className='container flex h-[80px] max-w-screen-2xl items-center justify-between'>
        <MainNav />
        <Search />
        <Wishlist />
      </nav>
    </header>
  )
}
