// import { useState } from "react";
// import i18n from "i18next";
// import { jwtDecode } from "jwt-decode";
// import { RouterProvider, createBrowserRouter } from "react-router-dom";
// import BaseLayout from "./layouts/BaseLayout/BaseLayout";
// import AuthLayout from "./layouts/AuthLayout/AuthLayout";
// import Login from "./pages/Auth/Login";
// import Register from "./pages/Auth/Register";
// import ForgetPassword from "./pages/Auth/ForgetPassword";
// import ResetPassword from "./pages/Auth/ResetPassword";
// import Home from "./pages/Home/Home";
// import ProtectedRoute from "@components/shared/ProtectedRoute/ProtectedRoute";
// import NotFound from "./pages/NotFound/NotFound";

// //toastify
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const App = () => {
//   document.documentElement.lang = i18n.language;

//   const [loginData, setLoginData] = useState('');

//   const saveLoginData = () => {
//     const encodedToken = localStorage.getItem("userToken");
//     const decodedToken = jwtDecode(encodedToken);
//     setLoginData(decodedToken);
//     console.log(decodedToken);
//   };

//   const routes = createBrowserRouter([
//     {
//       path: "/",
//       element: <AuthLayout />,
//       children: [
//         { index: true, element: <Login saveLoginData={saveLoginData} /> },
//         { path: "login", element: <Login saveLoginData={saveLoginData} /> },
//         { path: "register", element: <Register /> },
//         { path: "forget-pass", element: <ForgetPassword /> },
//         { path: "reset-pass", element: <ResetPassword /> },
//         { path: "*", element: <NotFound /> },
//       ],
//     },
//     {
//       path: "dashboard",
//       element: (
//         <ProtectedRoute>
//           <BaseLayout loginData={loginData} />
//         </ProtectedRoute>
//       ),
//       children: [
//         { index: true, element: <Home /> },
//         { path: "home", element: <Home /> },
//         { path: "*", element: <NotFound /> },
//       ],
//     },
//   ]);

//   return (
//     <>
//       <RouterProvider router={routes} />
//       <ToastContainer />
//     </>
//   );
// };

// export default App;


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
import ProtectedRoute from "@components/shared/ProtectedRoute/ProtectedRoute";
import NotFound from "./pages/NotFound/NotFound";

//toastify
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  document.documentElement.lang = i18n.language;

  // const [loginData, setLoginData] = useState('');

  // const saveLoginData = () => {
  //   const encodedToken = localStorage.getItem("userToken");
  //   const decodedToken = jwtDecode(encodedToken);
  //   setLoginData(decodedToken);
  //   console.log(decodedToken);
  // };

  const routes = createBrowserRouter([
    {
      path: "/",
      element: <AuthLayout />,
      children: [
        { index: true, element: <Login /> },
        { path: "login", element: <Login /> },
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
          <BaseLayout />
        </ProtectedRoute>
      ),
      children: [
        { index: true, element: <Home /> },
        { path: "home", element: <Home /> },
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
