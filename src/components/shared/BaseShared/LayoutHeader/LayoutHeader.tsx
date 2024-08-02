import { useTranslation } from "react-i18next";
import { Button, Layout, theme, Dropdown, Space, MenuProps } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";
const { Header } = Layout;
import IMAGES from "@assets/images/images";
import "./LayoutHeader.scss";

interface Item {
  collapsed?: boolean;
  setCollapsed?: (collapsed: boolean) => void;
}

const LayoutHeader = ({ setCollapsed, collapsed, loginData }: Item) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const logout = () => {
    window.localStorage.clear();
    navigate("/login");
  };

  const items: MenuProps["items"] = [
    {
      label: (
        <Link to='/'>Profile</Link>
      ),
      key: "0",
    },
    {
      type: "divider",
    },
    {
      label: (
        <button id="logout_btn" className="w-[100%] flex" onClick={logout}>
          {t("logout")}
        </button>
      ),
      key: "3",
    },
  ];

  return (
    <Header
    id="main_header"
      style={{
        position: "sticky",
        top: 0,
        zIndex: 1,
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: 0,
        paddingInlineEnd: "20px",
        background: colorBgContainer,
      }}
    >
      <Button
        type="text"
        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        onClick={() => setCollapsed && setCollapsed(!collapsed)}
        style={{
          fontSize: "16px",
          width: 64,
          height: 64,
        }}
      />

      <div className="flex gap-[30px]">
        <Dropdown placement="bottomRight" menu={{ items }}>
          <a className="leading-[1]" onClick={(e) => e.preventDefault()}>
            <Space>
              <span className="user_img_holder w-[40px] h-[40px] bg-[#ddd] flex rounded-[50%]"></span> 
              {loginData.userName}
              <DownOutlined />
            </Space>
          </a>
        </Dropdown>

        <Link className="flex" to='/'><img className="w-[15px]" src={IMAGES.notifIcon} alt="pic" /></Link>
      </div>
    </Header>
  );
};

export default LayoutHeader;
