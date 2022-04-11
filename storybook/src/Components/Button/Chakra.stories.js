import React from "react";
import { Button } from "@chakra-ui/button";
import { action, actions } from '@storybook/addon-actions'
import { text, boolean } from '@storybook/addon-knobs'

export default {
    title: 'Chakra',
    component: Button
}


export const Success = () => (
    <Button variantColor='green' onClick={action('Click handler')}>
        Success
    </Button>
)
export const Danger = () => (
    <Button variantColor='red' {...actions('onClick', 'onMouseOver')}>
        Danger
    </Button>
)

export const Log = () => (
    <Button
        variantColor='blue'
        onClick={() => console.log('Button clicked', process.env.STORYBOOK_THEME)}
    >
        Log
    </Button>
)

export const Knobs = () => (
    <Button variantColor='purple' disabled={boolean('Disabled', false)}>
        {text('Label', 'Button Label')}
    </Button>
)