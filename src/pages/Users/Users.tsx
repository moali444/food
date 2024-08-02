import { PageBanner } from "@components/index";
import IMAGES from "@assets/images/images";
import './Users.scss';

const Users = () => {
  return (
    <>
      <PageBanner
        main_title="Users"
        sub_title="List"
        banner_text="You can now add your items that any user can order it from the Application and you can edit"
        img_path={IMAGES.usersBanner}
      />
    </>
  )
}

export default Users