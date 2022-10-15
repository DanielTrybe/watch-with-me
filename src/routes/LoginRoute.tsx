import { Routes, Route } from "react-router-dom";
import { LoginPage } from "pages";

function LoginRoute() {
  return (
    <Routes>
      <Route path="" element={<LoginPage />} />
    </Routes>
  );
}

export default LoginRoute;
