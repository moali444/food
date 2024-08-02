import { Layout, Menu } from "antd";
import IMAGES from "@assets/images/images";
import { Link, useNavigate } from "react-router-dom";
import "./SideBar.scss";

const { Sider } = Layout;

interface Item {
  collapsed?: boolean;
}

const SideBar = ({ collapsed }: Item) => {
  const navigate = useNavigate();

  const logout = () => {
    window.localStorage.clear();
    navigate("/login");
  };

  return (
    <div id="sideBar">
      <Sider
        style={{
          overflow: "auto",
          height: "100vh",
          position: "fixed",
          left: 0,
          top: 0,
          bottom: 0,
          zIndex: 2,
        }}
        breakpoint="lg"
        trigger={null}
        collapsed={collapsed}
      >
        <div className="demo-logo-vertical" />
        <div className="logo_bx">
          <img src={IMAGES.logoIcon} alt="pic" />
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={[
            {
              key: "1",
              icon: <img src={IMAGES.homeIcon} alt="pic" />,
              label: <Link to='/dashboard'>Home</Link>,
            },
            {
              key: "2",
              icon: <img src={IMAGES.usersIcon} alt="pic" />,
              label: <Link to='/dashboard/users'>Users</Link>,
            },
            {
              key: "3",
              icon: <img src={IMAGES.recipesIcon} alt="pic" />,
              label: <Link to='/dashboard/recipes'>Recipes</Link>,
            },
            {
              key: "4",
              icon: <img src={IMAGES.categoriesIcon} alt="pic" />,
              label: <Link to='/dashboard/categories'>Categories</Link>,
            },
            {
              key: "5",
              icon: <img src={IMAGES.lockIcon} alt="pic" />,
              label: "Change Password",
            },
            {
              key: "6",
              icon: <img src={IMAGES.logoutIcon} alt="pic" />,
              label: <div onClick={logout}>Logout</div>,
            },
          ]}
        />
      </Sider>
    </div>
  );
};

export default SideBar;
