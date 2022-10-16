import React from "react";
import { BrowserRouter } from "react-router-dom";
import CardsProvider from "services/context/CardsList";
import { AuthProvider } from "services/context/AuthContext";
import AppRoutes from "routes/routes";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <CardsProvider>
          <AppRoutes />
        </CardsProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
