import HeroComponent from "@/components/HeroComponent";
import LogoComponent from "@/components/LogoComponent";
import Image from "next/image";
export default function Home() {
  return (
    <main className="min-h-screen md:bg-black relative overflow-hidden">
      <div className="absolute bg-black w-full h-screen flex flex-col justify-center items-center bg-opacity-90 md:bg-opacity-0">
        
        {/* Mobile background */}
        <div className="absolute w-full h-full bg-mobile-patern bg-cover md:hidden opacity-5">
        </div>

        <div className="absolute top-12 mx-auto md:left-16">
          <LogoComponent />
        </div>
        <div className="relative">
          <HeroComponent />

          {/* Tablet / Desktop Image */}
          <div
            className="w-full h-full bg-tablet-patern xl:bg-desktop-patern bg-cover hidden md:block md:absolute
      bottom-0  md:w-[491px] md:h-[767px] md:-right-24 xl:w-[888px] xl:h-[640px] z-0 xl:-right-[500px]
      "
          >
            <Image
              src={"/desktop/bg-pattern-dots.svg"}
              width={232}
              height={104}
              alt=""
              className="hidden  xl:block xl:absolute w-[232px] h-[104px] -bottom-14 right-0"
            />
          </div>

        </div>
      </div>
      <Image
        src={"/desktop/bg-pattern-dots.svg"}
        width={232}
        height={104}
        alt=""
        className="hidden md:block xl:hidden absolute w-[232px] h-[104px] bottom-0 left-0 "
      />
    </main>
  );
}
