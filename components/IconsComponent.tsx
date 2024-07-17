import Image from "next/image"
export default function IconsComponent() {
    return (
        <div>
            <Image src={'/desktop/apple-podcast.svg'} width={78} height={29} className="w-[45px] h-[17px]" alt="Apple Podcast"/>
            <Image src={'/desktop/google-podcasts.svg'} width={125} height={18} className="w-[73px] h-[11px]" alt="Google Podcast"/>
            <Image src={'/desktop/pocket-casts.svg'} width={129} height={26} className="w-[77px] h-[15px]" alt="Pocketcasts Podcast"/>
            <Image src={'/desktop/spotify.svg'} width={96} height={29} className="w-[56px] h-[17px]"  alt="Spotify Podcast"/>
        </div>
    )
}