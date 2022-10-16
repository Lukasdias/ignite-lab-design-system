import { Slot } from '@radix-ui/react-slot'
import { clsx } from 'clsx'
import { ButtonModel } from './model'

export function Button({ ...props }: ButtonModel) {
    const Comp = props.asChild ? Slot : 'button'
    return (
        <Comp
            {...props}
            className={clsx(
                'flex w-full items-center justify-center rounded-xs bg-cyan-500 py-4 px-3 text-sm text-black  ring-gray-100  transition-all duration-200 hover:bg-cyan-300 focus:ring-2',
                {}
            )}
        >
            {props.children}
        </Comp>
    )
}
