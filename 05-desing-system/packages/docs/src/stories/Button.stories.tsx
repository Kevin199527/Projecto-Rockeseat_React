import type { Meta, StoryObj } from '@storybook/react';
import {Button, ButtonProps} from "@ignite-ui/react";

export default {
    title: 'Form/Button',
    component: Button,

    args: {
        children: 'Send'
    },
} as Meta<ButtonProps>;

export const Primary: StoryObj<ButtonProps> = {};

