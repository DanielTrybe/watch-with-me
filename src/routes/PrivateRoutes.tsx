import { Routes, Route } from "react-router-dom";
import { VideoPage } from "pages";
import { MainLayout } from "components/layouts";

function PrivateRoutes() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="" element={<VideoPage />} />
      </Route>
    </Routes>
  );
}

export default PrivateRoutes;
