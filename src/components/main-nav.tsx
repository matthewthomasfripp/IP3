'use client'

import * as React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { LineChart, ShoppingBasket, Tag, Telescope } from 'lucide-react'
import { cn } from '@/lib/utils'
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from './ui/tooltip'

export function MainNav() {
  const pathname = usePathname()

  return (
    <div className='hidden w-full md:flex md:w-1/3'>
      <Link href='/' className='mr-6 flex items-center space-x-2'>
        <ShoppingBasket className='h-7 w-7' />
        <span className='hidden text-xl font-bold sm:inline-block'>
          marketmatchup
        </span>
      </Link>
      <nav className='flex items-center gap-4 text-base lg:gap-6'>
        <Link
          href='/explore'
          className={cn(
            'flex items-center transition-colors hover:text-foreground/80',
            pathname === '/explore' ? 'text-foreground' : 'text-foreground/60'
          )}
        >
          <Telescope className='mr-[5px] h-4 w-4' />
          Explore
        </Link>
        <Link
          href='/deals'
          className={cn(
            'flex items-center transition-colors hover:text-foreground/80',
            pathname?.startsWith('/deals')
              ? 'text-foreground'
              : 'text-foreground/60'
          )}
        >
          <Tag className='mr-[5px] h-4 w-4' />
          Deals
        </Link>
      </nav>
    </div>
  )
}
