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
import { Badge } from './ui/badge'

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
            <SheetDescription className='mt-0 -translate-y-1'>
              Create your personalised Wishlist.
            </SheetDescription>
          </SheetHeader>
          <div className='space-y-3'>
            {products.map((product) => (
              <div className='duration-125 relative transform transition hover:-translate-y-1 hover:shadow-md'>
                <WishlistRemove id={product.id} />
                <a href={product.href}>
                  <Card className='relative flex rounded-lg text-sm'>
                    <div className='relative mr-1 flex-none border-r bg-muted/50'>
                      <Image
                        className='overflow-hidden p-5'
                        src={`https://www.trolley.co.uk/img/product/${product.id}`}
                        width={100}
                        height={413}
                        alt={product.name}
                      />
                    </div>
                    <div className='relative pl-2 pr-2 pt-4'>
                      <div className='flex gap-2'>
                        <span className='text-lg font-bold leading-none'>
                          {product.brand}
                        </span>
                      </div>
                      <p className='mb-2 line-clamp-1 text-medium'>
                        {product.name}
                      </p>
                      {product.tag && (
                        <Badge className='bg-black'>{product.tag}</Badge>
                      )}
                      {product.tags && (
                        <div className='flex items-center gap-2'>
                          {product.tags.map(
                            (tag: { text: string; type: string }) => (
                              <Badge
                                key={tag.text}
                                className={`${
                                  {
                                    size: 'bg-black',
                                    qty: 'bg-blue-500',
                                    default: 'bg-gray-500',
                                  }[tag.type]
                                }`}
                              >
                                {tag.text}
                              </Badge>
                            )
                          )}
                        </div>
                      )}
                    </div>
                  </Card>
                </a>
              </div>
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
