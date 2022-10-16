import { ReactNode } from 'react'
import { HeadingSizeVariants } from '@utils/tokens'

export interface HeadingModel {
    size?: HeadingSizeVariants
    children: ReactNode
    asChild?: boolean
}
