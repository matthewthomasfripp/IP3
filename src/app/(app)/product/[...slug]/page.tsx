import { getProductPage } from '@/app/actions'
import Image from 'next/image'
import { Table, TableBody, TableCell, TableRow } from '@/components/ui/table'

import { ChevronRightIcon } from 'lucide-react'
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
import WishlistAdd from '@/components/wishlist-add'
import Share from '@/components/share'
export default async function ProductPage({
  params,
}: {
  params: { slug: [string, string] }
}) {
  const product = await getProductPage(params)

  return (
    <div className='container relative py-14'>
      <div className='grid grid-cols-[repeat(auto-fit,minmax(550px,1fr))] gap-10'>
        <section className='sticky top-4 h-80 items-center'>
          <Card className='ml-20 mt-20 max-w-md overflow-hidden rounded-lg bg-white shadow-md transition duration-300 hover:shadow-lg'>
            <CardHeader className='relative'>
              <Image
                className='m-auto block aspect-square w-full max-w-xl rounded-md'
                src={`https://www.trolley.co.uk/img/product/${product.id}`}
                width={600}
                height={600}
                alt={'test'}
              />
            </CardHeader>
            <CardContent className='p-4'>
              <CardTitle className='mb-2 flex space-x-1 text-2xl font-bold'>
                <span>{product.brand}</span>
                {product.tag && (
                  <Badge className='scale-80 bg-black text-base'>
                    {product.tag}
                  </Badge>
                )}
              </CardTitle>
              <CardDescription className='mt-[-12px] text-lg text-gray-600'>
                {product.name}
              </CardDescription>
            </CardContent>
            <CardFooter className='flex items-center justify-start gap-3 border-t bg-gray-100 p-4'>
              <WishlistAdd product={product} />
              <Share id={product.id} />
            </CardFooter>
          </Card>
        </section>
        <div className='space-y-12'>
          <section>
            <div className='mb-2 justify-between text-[26px] font-bold'>
              Where to buy
            </div>
            <Table>
              <TableBody>
                {product.shops.map((p, i) => (
                  <TableRow key={i}>
                    <TableCell className='hidden sm:table-cell'>
                      <Logo shop={p.name!} lg />
                    </TableCell>
                    <TableCell>
                      <div className='flex gap-1'>
                        <p className='text-base font-semibold'>{p.newPrice}</p>
                        {p.oldPrice && (
                          <p className='text-base text-foreground/60 line-through'>
                            {p.oldPrice}
                          </p>
                        )}
                      </div>
                      <p className='mt-[-5px] text-xs font-light text-muted-foreground'>
                        {p.eachPrice}
                      </p>
                    </TableCell>
                    <TableCell />
                    <TableCell>
                      <Link href={product.brand}>
                        <Button variant='outline' size='icon'>
                          <ChevronRightIcon className='h-4 w-4' />
                        </Button>
                      </Link>
                    </TableCell>
                  </TableRow>
                ))}
                <TableRow key='bottom' />
              </TableBody>
            </Table>
            <div className='flex gap-2 pt-5'>
              <InfoCircledIcon className='h-6 w-6'></InfoCircledIcon>
              <p className='text-sm text-black'>
                The prices shown above are available online and may not reflect
                in store.
              </p>
            </div>
          </section>
          <section>
            <div className='mb-6 justify-between text-[26px] font-bold'>
              Good to know
            </div>
            <ul className='list-disc columns-2 gap-10 pl-5'>
              {product.description.map((desc, i) => (
                <li key={i} className='pb-2 text-sm'>
                  {desc}
                </li>
              ))}
            </ul>
          </section>
          <section>
            <div className='mb-7 mt-[-10px] justify-between text-[26px] font-bold'>
              Reviews
            </div>
            <div className='flex gap-7 pl-2'>
              <div>
                <p className='pb-2 text-5xl font-light'>{product.review_avg}</p>
                <Rating
                  fractions={4}
                  size='md'
                  value={product.review_width}
                  readOnly
                />
                <p className='pt-1 text-sm'>{product.reviews}</p>
              </div>
              <div className='grow space-y-[5px]'>
                {product.review_bars.map((bar, i) => (
                  <div key={i} className='flex items-center space-x-3'>
                    <div className='w-5 text-center text-[13px] font-medium leading-4'>
                      {5 - i}
                    </div>
                    <Progress value={bar} className='' />
                  </div>
                ))}
              </div>
            </div>
            <div className='grid grid-cols-2 pt-6'>
              {product.review_arr.map(([text, rating], i) => (
                <div
                  className='duration-125 relative mb-4 transform items-center gap-[10px] rounded-lg p-2 transition hover:-translate-y-1 hover:bg-white hover:shadow-md'
                  key={i}
                >
                  <p className='pb-2 leading-tight'>{text}</p>
                  <Rating fractions={4} size='sm' value={rating} readOnly />
                </div>
              ))}
            </div>
          </section>
          {product.alternatives.length > 0 && (
            <section>
              <div className='mb-7 mt-[-10px] justify-between text-[26px] font-bold'>
                Supermarket Alternatives
              </div>
              <div className='grid grid-cols-2 gap-4 pl-1'>
                {product.alternatives.map((alt) => (
                  <ProductAlternative key={alt.title} {...alt} />
                ))}
              </div>
            </section>
          )}
        </div>
      </div>
    </div>
  )
}
