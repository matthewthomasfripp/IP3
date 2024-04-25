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
    <div className='lg:pt-13 mx-auto flex max-w-[980px] flex-col items-center gap-2 py-8 md:py-12 md:pb-8 lg:py-16 lg:pb-16'>
      <p className='mb-2 text-3xl font-bold tracking-tight'>Filter by store</p>
      <div className='flex gap-4'>
        {deals.stores.map((shop: any) => (
          <Link href={`/deals/stores/${shop.id}`}>
            <Button
              key={shop.name}
              variant='outline'
              className='h-20 w-[134px] rounded-md'
            >
              <Logo shop={shop.name} />
            </Button>
          </Link>
        ))}
      </div>
    </div>
  )
}
