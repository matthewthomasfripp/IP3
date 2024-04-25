import { getDealsPage, getProductPage } from '@/app/actions'
import Image from 'next/image'
import { Table, TableBody, TableCell, TableRow } from '@/components/ui/table'

import { ChevronRightIcon, PlusCircle, Share } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Logo from '@/components/logo'
import Link from 'next/link'
import { InfoCircledIcon } from '@radix-ui/react-icons'

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import ProductAlternative from '@/components/product-alternative'
import { Rating } from '@mantine/core'
import { Progress } from '@/components/ui/progress'
import { Badge } from '@/components/ui/badge'

import { useSearchParams } from 'next/navigation'
import StoreFilter from '@/components/store-filter'
import {
  PageHeader,
  PageHeaderHeading,
  PageHeaderDescription,
} from '@/components/page-header'
import ProductCard2 from '@/components/product-card-2'
import { cookies } from 'next/headers'

export default async function DealsPage({
  params,
}: {
  params: { slug: [string, string] }
}) {
  const deals = await getDealsPage(params.slug)

  return (
    <div className='container relative'>
      <PageHeader className='mb-[-70px]'>
        <PageHeaderHeading>Daily Deals</PageHeaderHeading>
      </PageHeader>
      {params.slug ? (
        <div className='mx-auto flex max-w-[980px] flex-col items-center py-6 pt-10 scale-[250%]'>
          <Logo shop={deals.products[0].store} />
        </div>
      ) : (
        <StoreFilter deals={deals} />
      )}
      <p className='mb-2 text-center text-3xl font-bold tracking-tight'>
        Deals
      </p>
      <div className='grid grid-cols-4 gap-4'>
        {deals.products.map((product) => (
          <ProductCard2 product={product} />
        ))}
      </div>
    </div>
  )
}
