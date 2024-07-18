import IconsComponent from "./IconsComponent";
import FormComponent from "./FormComponent";
export default function HeroComponent() {
  return (
    <div className="w-[327px] h-[398px] mx-auto grid grid-rows-12 grid-cols-12 
    md:w-[635px] md:h-[509px] 
    xl:w-[723px] xl:h-[509px] xl:-ml-[500px]
     md:bg-black z-10 relative
    ">
      <div className="w-full h-[192px]  text-center flex flex-col justify-between col-span-12 row-span-6 row-start-1
      md:justify-center md:row-start-3 md:col-span-12 md:text-start  z-10
      ">
        <h1 className="text-[26px] md:text-[48px] xl:text-[52px] md:leading-[56px] font-chivo uppercase font-light text-white z-10 mb-8">
          <span className="text-green">Publish your podcasts</span> everywhere.
        </h1>
        <p className="text-[15px] font-light md:text-[18px] md:w-[75%] md:leading-[28px] font-chivo text-gray z-10">
          Upload your audio to Pod with a single click. We’ll then distribute
          your podcast to Spotify, Apple Podcasts, Google Podcasts, Pocket Casts
          and more!
        </p>
      </div>
      <div className="w-[315px] h-[17px] md:w-[536px] md:h-[29px] col-span-12 row-span-1 row-start-8 md:row-start-12 z-10">
        <IconsComponent />
      </div>
      <div className="col-span-12 row-span-3 row-start-10 md:row-start-9 md:col-start-1 z-10">
        <FormComponent />
      </div>


    </div>
  );
}
