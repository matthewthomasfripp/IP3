'use client'

import * as React from 'react'
import { Button } from '@/components/ui/button'

import { X } from 'lucide-react'
import { wishlistRemove } from '@/app/actions'
import { toast } from 'sonner'

export default function WishlistRemove({ id }: { id: string }) {
  function remove(id: string) {
    toast.success('Product removed from wishlist')
    wishlistRemove(id)
  }
  return (
    <div className='absolute right-0 top-0 z-10'>
      <Button
        variant='outline'
        size='icon'
        className='duration-125 size-8 rounded-none rounded-bl-lg rounded-tr-lg transition-colors hover:bg-red-400'
        onClick={() => remove(id)}
      >
        <X className='h-3 w-3' />
      </Button>
    </div>
  )
}
