import { Layout, Menu } from "antd";
import IMAGES from "@assets/images/images";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./SideBar.scss";
import { useEffect, useState } from "react";

const { Sider } = Layout;

interface Item {
  collapsed?: boolean;
}

const SideBar = ({ collapsed }: Item) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [current, setCurrent] = useState(location.pathname)

  useEffect(() => {
    if (location) {
      if (current !== location.pathname) {
        setCurrent(location.pathname);
      }
    }
  }, [location, current]);

  function handleClick(e: any) {
    setCurrent(e.key);
  }
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
          onClick={handleClick}
          //defaultSelectedKeys={["1"]}
          items={[
            {
              key: "/dashboard",
              icon: <img src={IMAGES.homeIcon} alt="pic" />,
              label: <Link to="/dashboard">Home</Link>,
            },
            {
              key: "/dashboard/users",
              icon: <img src={IMAGES.usersIcon} alt="pic" />,
              label: <Link to="/dashboard/users">Users</Link>,
            },
            {
              key: "/dashboard/recipes",
              icon: <img src={IMAGES.recipesIcon} alt="pic" />,
              label: <Link to="/dashboard/recipes">Recipes</Link>,
            },
            {
              key: "4/dashboard/categories",
              icon: <img src={IMAGES.categoriesIcon} alt="pic" />,
              label: <Link to="/dashboard/categories">Categories</Link>,
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
