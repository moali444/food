import { PageBanner } from "@components/index";
import IMAGES from "@assets/images/images";
import './Recipes.scss';

const Recipes = () => {
  return (
    <>
      <PageBanner
        main_title="Recipes"
        sub_title="Items"
        banner_text="You can now add your items that any user can order it from the Application and you can edit"
        img_path={IMAGES.usersBanner}
      />
    </>
  )
}

export default Recipes