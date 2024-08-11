import {
  CatugTitleSection,
  PageBanner,
  CatugContentSection,
} from "@components/index";
import IMAGES from "@assets/images/images";
import "./Categories.scss";

const Categories = () => {
  return (
    <div id="catug_page">
      <PageBanner
        main_title="Categories"
        sub_title="Items"
        banner_text="You can now add your items that any user can order it from the Application and you can edit"
        img_path={IMAGES.usersBanner}
      />

      <CatugTitleSection />
      <CatugContentSection />
    </div>
  );
};

export default Categories;
