import LoginRoute from "./LoginRoute";
import PrivateRoutes from "./PrivateRoutes";
import { useCardsContext } from "hooks";

function AppRoutes() {
  const { loginUser } = useCardsContext();
  return loginUser.userName ? <PrivateRoutes /> : <LoginRoute />;
}

export default AppRoutes;
