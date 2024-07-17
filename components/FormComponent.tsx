'use client'

export default function FormComponent() {
    return (
        <>
            <form className="w-[327px] h-[108px] flex flex-col justify-between relative">
                <input type="email" name="email" placeholder="Email address" className="w-full h-[46px] bg-darkergray rounded-full pl-8 font-chivo text-[14px] font-bold text-gray 
                md:relative md:w-[427px] md:h-[56px]"/>
                <button type="submit" className="w-full h-[46px] bg-green text-black rounded-full font-chivo text-[14px] font-bold cursor-pointer 
                md:absolute md:w-[162px] md:h-[46px] md:-right-[95px] md:top-[5px]
                ">Request Access</button>
            </form>
        </>
    )
}