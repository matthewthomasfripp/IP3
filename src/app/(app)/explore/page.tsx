import { getExplorePage } from '@/app/actions'
import ProductCard3 from '@/components/product-card-3'

export default async function Explore() {
  const explore = await getExplorePage()

  return (
    <div className='container relative'>
      <div className='space-y-6 pt-8'>
        {explore.categories.map((category) => (
          <div key={category.name}>
            <p className='mb-2 pb-1 text-[28px] font-[650] tracking-tight'>
              {category.name}
            </p>
            <div className='grid grid-cols-5 gap-4'>
              {category.products.map((product) => (
                <ProductCard3 product={product} key={product.id} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
