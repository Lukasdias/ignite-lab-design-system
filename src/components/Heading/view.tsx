import { Slot } from '@radix-ui/react-slot'
import { clsx } from 'clsx'
import { HeadingModel } from './model'

export function Heading({ size = 'lg', children, asChild }: HeadingModel) {
    const Comp = asChild ? Slot : 'h2'
    return (
        <Comp
            className={clsx('text-gray-100', {
                'text-lg': size === 'lg',
                'text-xl': size === 'xl',
                'text-2xl': size === '2xl',
            })}
        >
            {children}
        </Comp>
    )
}
