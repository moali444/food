import {
  PageBanner,
  UsersContentSection,
  UsersTitleSection,
} from "@components/index";
import IMAGES from "@assets/images/images";
import "./Users.scss";

const Users = () => {
  return (
    <div id="users_page">
      <PageBanner
        main_title="Users"
        sub_title="List"
        banner_text="You can now add your items that any user can order it from the Application and you can edit"
        img_path={IMAGES.usersBanner}
      />

      <UsersTitleSection />
      <UsersContentSection />
    </div>
  );
};

export default Users;
