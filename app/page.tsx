import HeroComponent from "@/components/HeroComponent";
import LogoComponent from "@/components/LogoComponent";
export default function Home() {
  return (
    <main className="min-h-screen ">
      <div className="relative w-full min-h-screen bg-mobile-patern bg-cover">
        <div className="absolute bg-black w-full h-screen flex flex-col justify-center items-center bg-opacity-90">
          <div className="absolute top-12 mx-auto">
            <LogoComponent />
          </div>
          <div>
            <HeroComponent />
          </div>
        </div>
      </div>
    </main>
  );
}
