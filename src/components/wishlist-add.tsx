'use client'

import * as React from 'react'
import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import Link from 'next/link'
import { Heart, PlusCircle } from 'lucide-react'
import { wishlistAdd } from '@/app/actions'
import { toast } from 'sonner'

export default function WishlistAdd({ product }: any) {
  function add(product: any) {
    toast.success('Product added to wishlist')
    wishlistAdd(product)
  }
  return (
    <Button variant='outline' onClick={() => add(product)}>
      <PlusCircle className='mr-[5px] h-4 w-4' />
      List
    </Button>
  )
}
