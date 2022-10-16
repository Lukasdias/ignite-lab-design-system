import { clsx } from 'clsx'
import { TextModel } from './model'
import { Slot } from '@radix-ui/react-slot'

export function Text({ size = 'md', children, asChild }: TextModel) {
    const Comp = asChild ? Slot : 'span'
    return (
        <Comp
            className={clsx('text-gray-100', {
                'text-sm': size === 'sm',
                'text-md': size === 'md',
                'text-lg': size === 'lg',
            })}
        >
            {children}
        </Comp>
    )
}
