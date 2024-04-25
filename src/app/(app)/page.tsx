import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from '@/components/page-header'

import { getTopDeals } from '../actions'
import ProductCard from '@/components/product-card'

export default async function IndexPage() {
  const deals = await getTopDeals()

  return (
    <div className='container relative'>
      <PageHeader>
        <PageHeaderHeading>Today's Top Deals</PageHeaderHeading>
        <PageHeaderDescription>
          Your daily roundup of the best supermarket deals and offers.
        </PageHeaderDescription>
      </PageHeader>
      <section className='space-y-14 pl-52 pr-52'>
        {deals.map((product, i) => (
          <ProductCard product={product} i={i} key={product.id} />
        ))}
      </section>
    </div>
  )
}
