import Link from 'next/link'
import Logo from './logo'
import { Button } from './ui/button'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
const stores = [
  'aldi',
  'amazon',
  'asda',
  'bm',
  'boots',
  'bother',
  'coop',
  'ebay',
  'homebargains',
  'iceland',
  'morrisons',
  'ocado',
  'poundland',
  'sainsburys',
  'savers',
  'superdrug',
  'tesco',
  'waitrose',
  'wilko',
]

export default function StoreFilter({ deals }: any) {
  return (
    <div className='lg:pt-13 flex flex-col items-start gap-2 py-8 6'>
      <p className='mb-1 text-[28px] font-[650] tracking-tight'>Filter by store</p>
      <div className='flex gap-4'>
        {deals.stores.map((shop: any) => (
          <Link href={`/deals/stores/${shop.id}`}>
            <Button
              key={shop.name}
              variant='outline'
              className='h-24 w-[153px] rounded-md'
            >
              <Logo shop={shop.name} />
            </Button>
          </Link>
        ))}
      </div>
    </div>
  )
}
