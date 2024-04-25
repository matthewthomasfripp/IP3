import { AuroraBackground } from '@/components/aurora-background'
import SiteHeader from '@/components/site-header'

interface AppLayoutProps {
  children: React.ReactNode
}

export default function AppLayout({ children }: AppLayoutProps) {
  return (
    <>
      <SiteHeader />
      <main className='light flex-1 bg-muted/40 text-foreground'>
        {children}
      </main>
      <script src='localforage.js'></script>
    </>
  )
}
