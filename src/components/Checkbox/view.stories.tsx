import { Checkbox } from './view'
import { CheckboxModel } from './model'
import { Meta, StoryObj } from '@storybook/react'
import { Text } from '../Text/view'

type CheckboxStory = StoryObj<CheckboxModel>

export default {
    title: 'Components/Checkbox',
    component: Checkbox,
} as Meta<CheckboxModel>

export const Default: CheckboxStory = {}

export const WithLabel: CheckboxStory = {
    decorators: [
        (Story) => (
            <div className="flex items-center justify-start gap-2">
                <Story />
                <Text size="sm">
                    This is a test of the emergency broadcast system. This is
                    only a test.
                </Text>
            </div>
        ),
    ],
}

export const WithLabelAndDescription: CheckboxStory = {
    decorators: [
        (Story) => (
            <div className="w-full flex-col">
                <div className="mb-2 flex items-center justify-start gap-2">
                    <Story />
                    <Text size="sm">
                        This is a test of the emergency broadcast system. This
                        is only a test.
                    </Text>
                </div>
                <Text size="sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nulla vitae elit libero, a pharetra augue. Donec id elit non
                    mi porta gravida at eget metus.
                </Text>
            </div>
        ),
    ],
}
