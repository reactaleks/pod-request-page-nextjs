'use client'
import { validateEmail } from "@/app/formActions"
import { useFormState } from "react-dom"
import SubmitBtnComponent from "./SubmitBtnComponent"

const initialState = {
    validationMessage: '',
    emailValidated: false,
}

export default function FormComponent() {

    const [state, formAction] = useFormState(validateEmail, initialState)

    return (
        <>
            <form className="w-[327px] h-[108px] flex flex-col justify-between relative" action={formAction}>
                <input type="text" name="email" placeholder="Email address" className="w-full h-[46px] bg-darkergray rounded-full pl-8 font-chivo text-[14px] font-bold text-gray 
                md:relative md:w-[427px] md:h-[56px]"/>

                <p className={`font-chivo ${state?.emailValidated ? 'text-green' : 'text-red'} font-bold`}>{state?.validationMessage}</p>
                
                <SubmitBtnComponent/>
            </form>
        </>
    )
}