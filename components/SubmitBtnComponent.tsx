'use client'

import { useFormStatus } from "react-dom"

export default function SubmitBtnComponent() {
    const {pending} = useFormStatus()
    
    return (
        <button type="submit" className="w-full h-[46px] bg-green text-black rounded-full font-chivo text-[14px] font-bold cursor-pointer 
        md:absolute md:w-[162px] md:h-[46px] md:-right-[95px] md:top-[5px] z-10 hover:brightness-150
        " disabled={pending}>Request Access</button>
    )
}