import { Slot } from '@radix-ui/react-slot'
import { CheckboxModel, CheckboxRefModel } from './model'
import { Check } from 'phosphor-react'
import * as CheckboxPrimitive from '@radix-ui/react-checkbox'
import { forwardRef, useImperativeHandle, useState } from 'react'

export const Checkbox = forwardRef<CheckboxRefModel, CheckboxModel>(
    (props, ref) => {
        const [checked, setChecked] = useState(false)

        const handleClickCheckbox = () => setChecked(!checked)

        useImperativeHandle(ref, () => ({
            checked,
            handleCheck: handleClickCheckbox,
        }))

        return (
            <CheckboxPrimitive.Root
                className="h-6 w-6 rounded-xs bg-gray-800 p-[2px]"
                checked={checked}
                onCheckedChange={handleClickCheckbox}
            >
                <CheckboxPrimitive.Indicator className="" asChild>
                    <Check
                        weight="bold"
                        className={
                            'h-5 w-5 text-cyan-500 transition-colors duration-200'
                        }
                    />
                </CheckboxPrimitive.Indicator>
            </CheckboxPrimitive.Root>
        )
    }
)
