import React from "react";
import { BrowserRouter } from "react-router-dom";
import CardsProvider from "services/context/CardsList";
import AppRoutes from "routes/routes";

function App() {
  return (
    <BrowserRouter>
      <CardsProvider>
        <AppRoutes />
      </CardsProvider>
    </BrowserRouter>
  );
}

export default App;
