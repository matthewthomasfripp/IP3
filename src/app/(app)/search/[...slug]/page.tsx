import { getSearchPage } from '@/app/actions'
import Logo from '@/components/logo'
import StoreFilter from '@/components/store-filter'
import ProductCard2 from '@/components/product-card-2'

export default async function DealsPage({
  params,
}: {
  params: { slug: [string, string] }
}) {
  const deals = await getSearchPage(params.slug)

  return (
    <div className='container relative'>
      <p className='mb-2 pb-1 pt-8 text-[28px] font-[650] tracking-tight'>Search</p>
      <div className='grid grid-cols-4 gap-4'>
        {deals.products.map((product) => (
          <ProductCard2 product={product} key={product.id} />
        ))}
      </div>
    </div>
  )
}
