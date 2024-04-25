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

export default function ProductCard2({ product }: { product: any }) {
  return (
    <Card className='h-[470px] flex-col overflow-hidden rounded-lg bg-white shadow-md transition duration-300 hover:shadow-lg'>
      <CardHeader className='relative bg-muted/50'>
        <div className='absolute left-0 top-5 rounded-r-lg bg-white p-1 text-xs font-medium shadow-md'>
          {product.time}
        </div>
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
      <CardContent className='p-4 pb-8'>
        <CardTitle className='mb-2 flex space-x-1 text-xl font-bold'>
          <a href={product.href}>
            <span>{product.brand}</span>
          </a>
          {product.tag && (
            <Badge className='scale-80 bg-black text-base'>{product.tag}</Badge>
          )}
        </CardTitle>
        <CardDescription className='mt-[-12px] h-12 leading-tight text-gray-600'>
          <a href={product.href}>
            <div className='line-clamp-2'>{product.name}</div>
          </a>
        </CardDescription>
        <Logo shop={product.store} />
        <p className='font-semibold'>{product.price}</p>
      </CardContent>
    </Card>
  )
}
