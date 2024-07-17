import IconsComponent from "./IconsComponent";
import FormComponent from "./FormComponent";
import LogoComponent from "./LogoComponent";

export default function HeroComponent() {
  return (
    <>
      <div>
        <LogoComponent />
      </div>
      <div>
        <h1 className="text-[26px] font-chivo uppercase text-white">
          <span className="text-green">Publish your podcasts</span> everywhere.
        </h1>
        <p className="text-[15px] font-chivo">
          Upload your audio to Pod with a single click. We’ll then distribute
          your podcast to Spotify, Apple Podcasts, Google Podcasts, Pocket Casts
          and more!
        </p>
      </div>
      <div>
        <IconsComponent />
      </div>
      <div>
        <FormComponent />
      </div>
    </>
  );
}
