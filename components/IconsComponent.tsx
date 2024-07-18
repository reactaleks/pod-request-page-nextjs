import Image from "next/image"
export default function IconsComponent() {
    return (
        <div className="flex justify-between items-center">
            <Image src={'/desktop/apple-podcast.svg'} width={78} height={29} className="w-[45px] h-[17px] md:w-[78px] md:h-[29px]" alt="Apple Podcast"/>
            <Image src={'/desktop/google-podcasts.svg'} width={125} height={18} className="w-[73px] h-[11px] md:w-[125px] md:h-[18px]" alt="Google Podcast"/>
            <Image src={'/desktop/pocket-casts.svg'} width={129} height={26} className="w-[77px] h-[15px] md:w-[129px] md:h-[26px]" alt="Pocketcasts Podcast"/>
            <Image src={'/desktop/spotify.svg'} width={96} height={29} className="w-[56px] h-[17px] md:w-[96px] md:h-[29px]"  alt="Spotify Podcast"/>
        </div>
    )
}