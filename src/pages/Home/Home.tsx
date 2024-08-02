import { PageBanner } from "@components/index";
import IMAGES from "@assets/images/images";
import "./Home.scss";

const Home = () => {
  return (
    <>
      <PageBanner
        main_title="Welcome"
        sub_title="Upskilling !"
        banner_text="This is a welcoming screen for the entry of the application , you can now see the options"
        img_path={IMAGES.homeBanner}
      />
    </>
  );
};

export default Home;
