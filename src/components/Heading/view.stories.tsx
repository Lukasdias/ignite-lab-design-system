import { Heading } from './view'
import { HeadingModel } from './model'
import { Meta, StoryObj } from '@storybook/react'

type HeadingStory = StoryObj<HeadingModel>

export default {
    title: 'Components/Heading',
    component: Heading,
    args: {
        children: 'Hello World',
    },
} as Meta<HeadingModel>

export const Default: HeadingStory = {}

export const Small: HeadingStory = {
    args: {
        size: 'lg',
    },
}

export const Medium: HeadingStory = {
    args: {
        size: 'xl',
    },
}

export const Large: HeadingStory = {
    args: {
        size: '2xl',
    },
}

export const CustomComponent: HeadingStory = {
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
