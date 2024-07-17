'use client'

import { FormEvent } from "react";

export default function FormComponent() {
    async function onSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()

        console.log('Form submitted.')
    }


    return (
        <>
            <form onSubmit={onSubmit}>
                <input type="email" name="email" placeholder="Email address"/>
                <button type="submit">Request Access</button>
            </form>
        </>
    )
}