import HeroComponent from "@/components/HeroComponent";
import LogoComponent from "@/components/LogoComponent";
import Image from "next/image";
export default function Home() {
  return (
    <main className="min-h-screen md:bg-black">
      <div className="relative w-full min-h-screen bg-mobile-patern bg-cover md:bg-tablet-patern md:bg-right-top md:bg-tablet lg:bg-big-tablet md:bg-no-repeat ">
        <div className="absolute bg-black w-full h-screen flex flex-col justify-center items-center bg-opacity-90">
          <div className="absolute top-12 mx-auto md:left-16">
            <LogoComponent />
          </div>
          <div>
            <HeroComponent />
          </div>
          <div>
            <Image src={'/desktop/bg-pattern-dots.svg'} width={232} height={104} alt="" className="hidden md:block absolute w-[232px] h-[104px] left-0 bottom-0"/>
          </div>
        </div>
      </div>
    </main>
  );
}
