import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import Image from 'next/image'
import { Separator } from '@/components/ui/separator'
import Logo from '@/components/logo'
import { Rating } from '@mantine/core'
import { Badge } from '@/components/ui/badge'
import WishlistAdd from '@/components/wishlist-add'
import Share from '@/components/share'
export default function ProductCard({
  product,
  i,
}: {
  product: any
  i: number
}) {
  return (
    <Card className='duration-125 flex transform space-x-7 rounded-lg text-sm transition hover:-translate-y-1 hover:shadow-md'>
      <a href={product.href || ''} className='flex-none bg-muted/50'>
        <div className='relative'>
          {/* <div className='absolute h-full w-full shadow-[inset_0px_0px_71px_#00000012]'></div> */}
          <div className='absolute left-0 top-5 rounded-r-lg bg-foreground pb-3 pl-4 pr-4 pt-3 font-bold text-white'>
            {i + 1}
          </div>
          <Image
            className='overflow-hidden p-10 pt-14'
            src={`https://www.trolley.co.uk/img/product/${product.id}`}
            width={360}
            height={413}
            alt={product.name}
          />
        </div>
      </a>
      <div className='relative pt-4'>
        <div className='flex gap-2'>
          <a href={product.href}>
            <span className='text-xl font-bold leading-none'>
              {product.brand}
            </span>
          </a>
          <div className='flex items-center gap-2'>
            {product.tags.map((tag: { text: string; type: string }) => (
              <Badge
                key={tag.text}
                className={
                  {
                    size: 'bg-black',
                    qty: 'bg-blue-500',
                    default: 'bg-gray-500',
                  }[tag.type]
                }
              >
                {tag.text}
              </Badge>
            ))}
          </div>
        </div>
        <a href={product.href}>
          <p className='line-clamp-1 text-lg'>{product.name}</p>
        </a>
        <hr className='bt-[1px] mb-3 mt-3 w-full' />
        <div>
          <span className='font-[600] tracking-wide'>Available at</span>
          <div className='flex items-start gap-7 pt-2'>
            {product.shops.map((x: any) => (
              <a href='' key={x.name}>
                <div className='space-y-1'>
                  <Logo shop={x.name} />
                  <div className='font-medium'>{x.price}</div>
                </div>
              </a>
            ))}
            <a href={product.href}>
              {product.more_x > 0 && (
                <div className='flex flex-col space-y-1 font-normal'>
                  <span>{product.more_x}</span>
                  <span className='text-sm'>STORES</span>
                </div>
              )}
            </a>
          </div>
        </div>
        <hr className='bt-[1px] mb-3 mt-3 w-full' />
        <div>
          <span className='font-[600] tracking-wide'>What people say</span>
          <div className='mb-2 flex items-center gap-2 pt-2'>
            <div className='relative'>
              <Rating
                fractions={4}
                size='xs'
                value={product.review_width}
                readOnly
              />
            </div>
            <span className='text-wrap text-xs font-light'>
              {product.reviews}
            </span>
          </div>
          <div className='max-w-[500px] text-sm font-light'>
            {product.displayed_review}
          </div>
        </div>
        <hr className='bt-[1px] mb-3 mt-3 w-full' />
        <div className='flex items-center justify-start gap-3'>
          <WishlistAdd product={product} />
          <Share />
        </div>
      </div>
    </Card>
  )
}
