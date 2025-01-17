import { Meta, StoryFn } from '@storybook/react'
import React from 'react'

import { Button, ButtonProps } from './button'

export default {
    title: 'Components/Button',
    component: Button,
} as Meta

const Template: StoryFn<ButtonProps> = (args: ButtonProps) => (
    <Button {...args}>Button</Button>
)

export const Primary: StoryFn<ButtonProps> = Template.bind({})
Primary.args = {
    onClick: () => alert('Button clicked!'),
    variant: 'primary',
}

export const Secondary: StoryFn<ButtonProps> = Template.bind({})
Secondary.args = {
    onClick: () => alert('Button clicked!'),
    variant: 'seconadry',
}

export const Outline: StoryFn<ButtonProps> = Template.bind({})
Outline.args = {
    onClick: () => alert('Button clicked!'),
    variant: 'outline',
}

export const OutlineSecondary: StoryFn<ButtonProps> = Template.bind(
    {},
)
OutlineSecondary.args = {
    onClick: () => alert('Button clicked!'),
    variant: 'outline-secondary',
}
