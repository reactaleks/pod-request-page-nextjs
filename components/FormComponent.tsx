'use client'

export default function FormComponent() {
    return (
        <>
            <form className="w-[327px] h-[108px] flex flex-col justify-between">
                <input type="email" name="email" placeholder="Email address" className="w-full h-[46px] bg-darkergray rounded-full pl-8 font-chivo text-[14px] font-bold text-gray"/>
                <button type="submit" className="w-full h-[46px] bg-green text-black rounded-full font-chivo text-[14px] font-bold cursor-pointer">Request Access</button>
            </form>
        </>
    )
}