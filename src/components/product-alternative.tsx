import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import Image from 'next/image'
import { Separator } from '@/components/ui/separator'
import Logo from '@/components/logo'
import { PlusCircle, Share } from 'lucide-react'
import { Rating } from '@mantine/core'
import { Badge } from '@/components/ui/badge'

export default function ProductAlternative({
  title,
  shop,
  price,
  per_x,
  id,
}: any) {
  return (
    <a href={`/product/a/${id}`}>
      <Card className='duration-125 relative grid h-[125px] transform grid-cols-[50px_auto] items-center gap-[10px] p-3 transition hover:-translate-y-1 hover:shadow-md'>
        <div className='relative h-12 w-12 flex-none'>
          <Image
            src={`https://www.trolley.co.uk/img/product/${id}`}
            fill
            style={{ objectFit: 'contain' }}
            alt='product image'
          />
        </div>

        <div>
          <Logo shop={shop} className='mb-1' />
          <p className='line-clamp-2 text-sm leading-tight'>{title}</p>
          <p className='mt-2 text-sm font-bold'>{price}</p>
          <p className='mt-[-2px] text-xs '>{per_x}</p>
        </div>
      </Card>
    </a>
  )
}
