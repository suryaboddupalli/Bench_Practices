import React from "react";
import Center from "../Center/Center";
import Button from "./Button";

export default {
    title: 'Form/Button',
    component: Button,
    decorators: [story => <Center>{story()}</Center>]
}

export const Primary = () => <Button variant='primary' >Primary</Button>
export const Secondary = () => <Button variant='secondary' >Secondary</Button>
export const Success = () => <Button variant='success' >Success</Button>
export const Danger = () => <Button variant='danger' >Danger</Button>

const Template = args => <Button {...args} />

export const PrimaryArg = Template.bind({})
PrimaryArg = {
    variant: 'primary',
    children: 'Primary Arg'
}

export const SecondaryArg = Template.bind({})
SecondaryArg = {
    variant: 'secondary',
    children: 'Secondary arg'
}
