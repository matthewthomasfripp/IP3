import { MantineProvider } from '@mantine/core'
import { NextUIProvider } from '@nextui-org/react'

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <MantineProvider>
      <NextUIProvider>{children}</NextUIProvider>
    </MantineProvider>
  )
}
