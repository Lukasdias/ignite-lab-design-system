import { Slot } from '@radix-ui/react-slot'
import { clsx } from 'clsx'
import { InputModel } from './model'

export function Input({}: InputModel) {
    return <input className={clsx('', {})} />
}
