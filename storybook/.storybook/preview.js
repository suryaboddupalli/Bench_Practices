import React from "react";
import { addDecorator } from "@storybook/react";
import Center from "../src/Components/Center/Center";
import { theme, CSSReset, ThemeProvider } from '@chakra-ui/core'

addDecorator(story => <ThemeProvider theme={theme}><CSSReset />{story()}</ThemeProvider >)