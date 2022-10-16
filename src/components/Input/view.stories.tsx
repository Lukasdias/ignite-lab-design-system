import { Input } from './view'
import { InputModel } from './model'
import { Meta, StoryObj } from '@storybook/react'

type InputStory = StoryObj<InputModel>

export default {
    title: 'Components/Input',
    component: Input,
} as Meta<InputModel>

export const Default: InputStory = {}
