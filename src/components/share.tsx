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
import { Share as Icon } from 'lucide-react'
import { wishlistAdd } from '@/app/actions'
import { toast } from 'sonner'

export default function Share({ product }: any) {
  function copy(product: any) {
    toast.success('Product link copied to clipboard')
    navigator.clipboard.writeText('test')
  }
  return (
    <Button variant='outline' onClick={() => copy(product)}>
      <Icon className='mr-[5px] h-4 w-4' />
      Share
    </Button>
  )
}
