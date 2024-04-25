import * as React from 'react'
import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import Link from 'next/link'
import { Heart } from 'lucide-react'
import { cookies } from 'next/headers'
import Image from 'next/image'
import { Card } from './ui/card'
import WishlistRemove from './wishlist-remove'

export default function Wishlist() {
  const cookieStore = cookies()

  const products = cookieStore
    .getAll()
    .filter((c) => c.name.startsWith('p-') && c.value)
    .map((x) => JSON.parse(x.value))

  return (
    <div className='flex justify-end md:w-1/3'>
      <Sheet>
        <SheetTrigger asChild>
          <Button asChild variant='outline' size='lg'>
            <Link
              href='#'
              className='group flex items-center justify-center rounded-lg text-muted-foreground transition-all hover:text-foreground'
            >
              <Heart className='h-5 w-5 transition-transform group-hover:scale-110' />
            </Link>
          </Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader className='mb-4'>
            <SheetTitle>My Wishlist</SheetTitle>
            <SheetDescription>
              Create and share your personalised Wishlist.
            </SheetDescription>
          </SheetHeader>
          <div className='space-y-3'>
            {products.map((product) => (
              <Card className='duration-125 relative flex transform rounded-lg text-sm transition hover:-translate-y-1 hover:shadow-md'>
                <WishlistRemove id={product.id} />
                <a href={product.href} className='flex-none bg-muted/50'>
                  <div className='relative'>
                    <Image
                      className='overflow-hidden p-3'
                      src={`https://www.trolley.co.uk/img/product/${product.id}`}
                      width={100}
                      height={413}
                      alt={product.name}
                    />
                  </div>
                </a>
                <div className='relative pl-2 pr-2 pt-4'>
                  <div className='flex gap-2'>
                    <a href={product.href}>
                      <span className='text-lg font-bold leading-none'>
                        {product.brand}
                      </span>
                    </a>
                  </div>
                  <a href={product.href}>
                    <p className='text-medium line-clamp-2'>{product.name}</p>
                  </a>
                </div>
              </Card>
            ))}
          </div>

          <SheetFooter>
            {/* <SheetClose asChild>
              <Button type='submit'>Save changes</Button>
            </SheetClose> */}
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  )
}
