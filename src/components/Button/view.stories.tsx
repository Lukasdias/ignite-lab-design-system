import { Button } from './view'
import { ButtonModel } from './model'
import { Meta, StoryObj } from '@storybook/react'

type ButtonStory = StoryObj<ButtonModel>

export default {
    title: 'Components/Button',
    component: Button,
    args: {
        children: 'Create Account',
    },
} as Meta<ButtonModel>

export const Default: ButtonStory = {}
