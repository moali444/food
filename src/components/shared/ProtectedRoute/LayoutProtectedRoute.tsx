import { Navigate } from "react-router-dom";

interface Item {
  loginData: string;
  children: string;
}
function LayoutProtectedRoute({ loginData, children }: Item) {
  if (!localStorage.getItem("userToken") || loginData) return children;
  else return <Navigate to="/home" />;
}

export default LayoutProtectedRoute;
