import IconsComponent from "./IconsComponent";
import FormComponent from "./FormComponent";

export default function HeroComponent() {
  return (
    <div className="w-[327px] h-[398px] mx-auto grid grid-rows-12 grid-cols-12">
      <div className="w-full h-[192px]  text-center flex flex-col justify-between col-span-12 row-span-6 row-start-1">
        <h1 className="text-[26px] font-chivo uppercase text-white">
          <span className="text-green">Publish yo ur podcasts</span> everywhere.
        </h1>
        <p className="text-[15px] font-chivo text-gray">
          Upload your audio to Pod with a single click. We’ll then distribute
          your podcast to Spotify, Apple Podcasts, Google Podcasts, Pocket Casts
          and more!
        </p>
      </div>
      <div className="w-[315px] h-[17px] col-span-12 row-span-1 row-start-8">
        <IconsComponent />
      </div>
      <div className="col-span-12 row-span-3 row-start-9">
        <FormComponent />
      </div>
    </div>
  );
}
