import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { showLoader, hideLoader } from "../../redux/loaderSlice";
import { Outlet } from "react-router-dom";
import MainLoader from "../../components/shared/Loaders/MainLoader";
import "./AuthLayout.scss";

const AuthLayout = () => {
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

  return (
    <>
      <MainLoader />
      <div
        id="auth_container"
        className="flex items-center justify-center flex-col"
      >
        <Outlet />
      </div>
    </>
  );
};

export default AuthLayout;
