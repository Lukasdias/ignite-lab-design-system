import { ReactNode } from 'react'

type SizeVariants = 'lg' | 'xl' | '2xl'

export interface HeadingModel {
    size?: SizeVariants
    children: ReactNode
    asChild?: boolean
}
