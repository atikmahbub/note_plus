import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";

type PrivateProps = {
  children: React.ReactNode;
};

const PrivateRoute = ({ children }: PrivateProps) => {
  let { authenticated } = useAuth();
  return authenticated ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoute;
