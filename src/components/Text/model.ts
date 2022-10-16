type SizeVariants = 'sm' | 'md' | 'lg'

export interface TextModel {
    size?: SizeVariants
    children: React.ReactNode
    asChild?: boolean
}
