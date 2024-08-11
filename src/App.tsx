import { useState } from "react";
import i18n from "i18next";
import { jwtDecode } from "jwt-decode";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import BaseLayout from "./layouts/BaseLayout/BaseLayout";
import AuthLayout from "./layouts/AuthLayout/AuthLayout";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import ForgetPassword from "./pages/Auth/ForgetPassword";
import ResetPassword from "./pages/Auth/ResetPassword";
import Home from "./pages/Home/Home";
import Users from "./pages/Users/Users";
import Recipes from "./pages/Recipes/Recipes";
import Categories from "./pages/Categories/Categories";
import ProtectedRoute from "@components/shared/ProtectedRoute/ProtectedRoute";
import NotFound from "./pages/NotFound/NotFound";

//toastify
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  document.documentElement.lang = i18n.language;

  const [loginData, setLoginData] = useState(() => {
    const storedLoginData = localStorage.getItem("loginData");
    return storedLoginData ? JSON.parse(storedLoginData) : '';
  });

  const saveLoginData = () => {
    const encodedToken = localStorage.getItem("userToken");
    if (encodedToken) {
      const decodedToken = jwtDecode(encodedToken);
      setLoginData(decodedToken);
      localStorage.setItem("loginData", JSON.stringify(decodedToken));
      console.log(decodedToken);
    }
  };

  const routes = createBrowserRouter([
    {
      path: "/",
      element: <AuthLayout />,
      errorElement: <NotFound />,
      children: [
        { index: true, element: <Login saveLoginData={saveLoginData} /> },
        { path: "login", element: <Login saveLoginData={saveLoginData} /> },
        { path: "register", element: <Register /> },
        { path: "forget-pass", element: <ForgetPassword /> },
        { path: "reset-pass", element: <ResetPassword /> },
        { path: "*", element: <NotFound /> },
      ],
    },
    {
      path: "dashboard",
      element: (
        <ProtectedRoute>
          <BaseLayout loginData={loginData} />
        </ProtectedRoute>
      ),
      children: [
        { index: true, element: <Home /> },
        { path: "home", element: <Home /> },
        { path: "users", element: <Users /> },
        { path: "recipes", element: <Recipes /> },
        { path: "categories", element: <Categories /> },
        { path: "*", element: <NotFound /> },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={routes} />
      <ToastContainer />
    </>
  );
};

export default App;
