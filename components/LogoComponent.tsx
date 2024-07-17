import Image from "next/image"

export default function LogoComponent() {
    return (
        <> 
            <Image src={'/desktop/logo.svg'} width={135} height={56} alt="Pod request logo" className="w-[134.85px] h-[56px]"/>
        </>
    )
}