import { TextSizeVariants } from '@utils/tokens'

export interface TextModel {
    size?: TextSizeVariants
    children: React.ReactNode
    asChild?: boolean
}
