import { Button } from '@/components/ui/button'
import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
  CardDescription,
  CardFooter,
} from '@/components/ui/card'
import Image from 'next/image'
import { Separator } from '@/components/ui/separator'
import Logo from '@/components/logo'
import { PlusCircle, Share } from 'lucide-react'
import { Rating } from '@mantine/core'
import { Badge } from '@/components/ui/badge'
import WishlistAdd from './wishlist-add'

export default function ProductCard3({ product }: { product: any }) {
  return (
    <Card className='h-[400px] flex-col overflow-hidden rounded-lg bg-white shadow-md transition duration-300 hover:shadow-lg'>
      <CardHeader className='relative border-b bg-muted/50'>
        {product.tag && (
          <div className='absolute top-2 right-2'>
            <Badge>{product.tag}</Badge>
          </div>
        )}
        <a href={product.href}>
          <Image
            className='m-auto block aspect-square w-full max-w-xl rounded-md p-5'
            src={`https://www.trolley.co.uk/img/product/${product.id}`}
            width={600}
            height={600}
            alt={'test'}
          />
        </a>
      </CardHeader>
      <CardContent className='p-4 pb-8 pt-3'>
        <CardTitle className='relative flex text-lg font-bold'>
          <a href={product.href}>
            <span className='line-clamp-1'>{product.brand}</span>
          </a>
        </CardTitle>
        <CardDescription className='h-12 leading-tight text-gray-600'>
          <a href={product.href}>
            <span className='line-clamp-2'>{product.name}</span>
          </a>
        </CardDescription>
        <div className='relative flex'>
          <div>
            <a href={product.href}>
              <p className='text-lg font-bold'>{product.price}</p>
              <div className='-mt-1 text-xs font-[500]'>{product.per_x}</div>
            </a>
          </div>
          <div className='absolute right-0'>
            <WishlistAdd product={product} />
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
