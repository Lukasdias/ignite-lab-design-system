import { TextInput } from './view'
import { InputModel, InputRootModel } from './model'
import { Meta, StoryObj } from '@storybook/react'
import { Envelope } from 'phosphor-react'

type InputStory = StoryObj<InputRootModel>

export default {
    title: 'Components/TextInput',
    component: TextInput.Root,
    args: {
        children: (
            <>
                <TextInput.Icon>
                    <Envelope />
                </TextInput.Icon>
                <TextInput.Input placeholder={'Placeholder'} />
            </>
        ),
    },
    argTypes: {
        children: {
            table: {
                disable: true,
            },
        },
    },
} as Meta<InputRootModel>

export const Default: InputStory = {}

export const WithoutIcon: InputStory = {
    args: {
        children: <TextInput.Input placeholder={'Placeholder'} />,
    },
}
