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
      <Button variant='ghost' size='icon' onClick={() => remove(id)}>
        <X className='h-4 w-4' />
      </Button>
    </div>
  )
}
