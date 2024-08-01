import { useTranslation } from "react-i18next";
import { Button, Layout, theme, Dropdown, Space, MenuProps } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";
import { useContext } from "react";
import { AuthContext } from "src/context/AuthContext";
const { Header } = Layout;
import "./LayoutHeader.scss";

interface Item {
  collapsed?: boolean;
  setCollapsed?: (collapsed: boolean) => void;
}

const LayoutHeader = ({ setCollapsed, collapsed }: Item) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const { loginData } = useContext(AuthContext);

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
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.antgroup.com"
        >
          1st menu item
        </a>
      ),
      key: "0",
    },
    {
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.aliyun.com"
        >
          2nd menu item
        </a>
      ),
      key: "1",
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
      style={{
        position: "sticky",
        top: 0,
        zIndex: 1,
        width: "100%",
        display: "flex",
        alignItems: "center",
        padding: 0,
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

      <div>
        <Dropdown placement="bottomRight" menu={{ items }}>
          <a onClick={(e) => e.preventDefault()}>
            <Space>
              Hover me
              <DownOutlined />
            </Space>
          </a>
        </Dropdown>
      </div>

      <div>{loginData?.userName}</div>
    </Header>
  );
};

export default LayoutHeader;
