import useAuth from "services/context/AuthContext";
import LoginRoute from "./LoginRoute";
import PrivateRoutes from "./PrivateRoutes";

function AppRoutes() {
  const { user } = useAuth();
  return user.userName ? <PrivateRoutes /> : <LoginRoute />;
}

export default AppRoutes;
