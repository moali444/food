import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { showLoader, hideLoader } from "../../redux/loaderSlice";
import { Layout, theme } from "antd";
import { Outlet } from "react-router-dom";
import MainLoader from "../../components/shared/Loaders/MainLoader";
import "./BaseLayout.scss";
import { LayoutHeader, SideBar } from "@components/index";

const { Content, Footer } = Layout;

const BaseLayout = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const dispatch = useDispatch();
  const fireLoader = () => {
    dispatch(showLoader());

    setTimeout(() => {
      dispatch(hideLoader());
    }, 800);
  };

  useEffect(() => {
    fireLoader();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (windowWidth < 768) {
      setCollapsed(true);
    } else if (windowWidth < 1200) {
      setCollapsed(false);
    } else {
      setCollapsed(false);
    }
  }, [windowWidth]);

  return (
    <>
      <MainLoader />

      <Layout className={collapsed ? "closed_bar" : "open_bar"}>
        <SideBar collapsed={collapsed} />

        <Layout>
          <LayoutHeader setCollapsed={setCollapsed} collapsed={collapsed} />
          <Content style={{ margin: "24px 16px 0" }}>
            <div
              style={{
                padding: 24,
                minHeight: 360,
                background: colorBgContainer,
                borderRadius: borderRadiusLG,
              }}
            >
              <Outlet />
            </div>
          </Content>

          <Footer style={{ textAlign: "center" }}>
            Ant Design ©{new Date().getFullYear()} Created by Ant UED
          </Footer>
        </Layout>
      </Layout>

      <Footer />
    </>
  );
};

export default BaseLayout;
