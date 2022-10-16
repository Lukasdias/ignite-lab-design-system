import { InputIconModel, InputModel, InputRootModel } from './model'
import { Slot } from '@radix-ui/react-slot'

function Root({ children }: InputRootModel) {
    return (
        <div className="border-gray-300 rounded flex h-12 w-full items-center justify-start gap-3  rounded-xs border border-none bg-gray-800 bg-scroll px-4 py-3  outline-none outline-0 transition duration-200   focus-within:border-transparent focus-within:outline-none focus-within:ring-2 focus-within:ring-cyan-500 focus-within:ring-offset-cyan-500">
            {children}
        </div>
    )
}

function Icon({ children }: InputIconModel) {
    return <Slot className="h-6 w-6 text-gray-400">{children}</Slot>
}

function Input({ ...props }: InputModel) {
    return (
        <input
            {...props}
            className={
                'flex  flex-1 border-none bg-transparent text-xs text-gray-200 outline-none placeholder:text-xs placeholder:text-gray-400 placeholder:opacity-50'
            }
        />
    )
}
Root.displayName = 'TextInput.Root'
Icon.displayName = 'TextInput.Icon'
Input.displayName = 'TextInput.Input'

export const TextInput = {
    Root,
    Icon,
    Input,
}
