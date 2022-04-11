import React from "react";
import Input from "./Input";

export default {
    title: 'Form/Input',
    component: Input
}

export const Small = () => <Input size='small' placeholder='smallersize' />
export const Medium = () => <Input size='medium' placeholder='Mediumsize' />
export const Large = () => <Input size='large' placeholder='Largersize' />
