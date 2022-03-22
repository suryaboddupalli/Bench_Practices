import React from "react";
import { render, fireEvent, getByTestId, getByLabelText, getByRole } from "@testing-library/react";
import Form from "./Form";

test('render', () => {
    const { getByTest, getByLabelText } = render(<Form />)
    const NameLabel = getByTest(/Name:/i)
    const AgeLabel = getByTest(/Age:/i)

    expect(NameLabel).toBeInTheDocument()
    expect(AgeLabel).toBeInTheDocument()

    const input = getByLabelText(/Age:/i)
    expect(input).toHaveAttribute('type', 'number')
})

test('empty Name', () => {
    const { getByLabelText, getByRole } = render(<Form />)

    const Nameinput = getByLabelText(/Name:/i)
    fireEvent.change(Nameinput, { 'target': { 'value': '' } })
    const btn = getByRole('button', { name: 'submit' })
    expect(btn).toHaveAttribute('disabled')
})

test('Non empty Name', () => {
    const { getByLabelText, getByRole, debug } = render(<Form />)
    const Nameinput = getByLabelText(/Name:/i)
    fireEvent.change(Nameinput, { 'target': { 'value': '' } })
    const btn = getByRole('button', { name: 'submit' })
    expect(btn).toHaveAttribute('disabled')
    debug(btn)
    fireEvent.change(Nameinput, { 'target': { 'value': '' } })
    debug(btn)
    expect(btn).not.toHaveAttribute('disabled')
})