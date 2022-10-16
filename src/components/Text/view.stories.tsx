import { Text } from './view'
import { TextModel } from './model'
import { Meta, StoryObj } from '@storybook/react'

type TextStory = StoryObj<TextModel>

export default {
    title: 'Components/Text',
    component: Text,
    args: {
        children: 'Hello World',
    },
} as Meta<TextModel>

export const Default: TextStory = {}

export const Small: TextStory = {
    args: {
        size: 'sm',
    },
}

export const Medium: TextStory = {
    args: {
        size: 'md',
    },
}

export const Large: TextStory = {
    args: {
        size: 'lg',
    },
}

export const CustomComponent: TextStory = {
    args: {
        asChild: true,
        children: (
            <p>
                This is a custom component. It is a <code>p</code> tag.
            </p>
        ),
    },
    argTypes: {
        children: {
            control: {
                disable: true,
            },
        },
        asChild: {
            table: {
                disable: true,
            },
        },
    },
}
