import IconsComponent from "./IconsComponent";
import FormComponent from "./FormComponent";

export default function HeroComponent() {
  return (
    <div className="w-[327px] h-[398px] flex flex-col mx-auto justify-between">
      <div className="w-full h-[192px]  text-center flex flex-col justify-between">
        <h1 className="text-[26px] font-chivo uppercase text-white">
          <span className="text-green">Publish your podcasts</span> everywhere.
        </h1>
        <p className="text-[15px] font-chivo text-gray">
          Upload your audio to Pod with a single click. We’ll then distribute
          your podcast to Spotify, Apple Podcasts, Google Podcasts, Pocket Casts
          and more!
        </p>
      </div>
      <div className="w-[315px] h-[17px]">
        <IconsComponent />
      </div>
      <div className="">
        <FormComponent />
      </div>
    </div>
  );
}
