import React from "react";
import { ReactDOM } from "react";
import Login from "../Components/Auth/Login";
import { render, screen, fireEvent } from '@testing-library/react';

describe('Login', () => {
    test('render Button', () => {
        const { getByTextId } = render(<Login />)
        expect(getByTextId('button')).toHaveTextContent('login')
    })

    test('email and password entered', () => {
        render(<Login />)
        const email = screen.getByLabelText('Email')
        const password = screen.getByLabelText('Password')
        const button = screen.getByRole('button')

        expect(button).toBeDisabled()
        fireEvent.change(email, { target: { value: "surya@gmail.com" } })
        fireEvent.change(password, { target: { value: "surya" } })
        except(button).toBeEnabled()
    })

})