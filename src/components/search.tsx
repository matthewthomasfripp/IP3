'use client'

import { createUrl } from '@/lib/utils'
import { Search as SearchIcon } from 'lucide-react'
import { useRouter, useSearchParams } from 'next/navigation'

export default function Search() {
  const router = useRouter()
  const searchParams = useSearchParams()

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    const val = e.target as HTMLFormElement
    const search = val.search as HTMLInputElement

    router.push(`/search/${search.value}`)
  }

  return (
    <div className='hidden justify-center md:flex md:w-1/3'>
      <form
        onSubmit={onSubmit}
        className='w-max-[550px] relative w-full lg:w-80 xl:w-full'
      >
        <input
          key={searchParams?.get('q')}
          type='text'
          name='search'
          placeholder='Search for products...'
          autoComplete='off'
          defaultValue={searchParams?.get('q') || ''}
          className='w-full rounded-lg border bg-white px-4 py-2 text-sm text-black placeholder:text-neutral-500'
        />
        <div className='absolute right-0 top-0 mr-3 flex h-full items-center'>
          <SearchIcon className='h-4' />
        </div>
      </form>
    </div>
  )
}
