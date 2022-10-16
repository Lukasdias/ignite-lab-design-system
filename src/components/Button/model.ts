import { ReactNode } from 'react'
import { Slot, SlotProps } from '@radix-ui/react-slot'

export interface ButtonModel extends SlotProps {
    children: ReactNode
    asChild?: boolean
}
