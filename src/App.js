import React from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Loginp from "./Login/login";
import Dashboard from "./DashBoard/dashboard";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Loginp/>}/>
      <Route path="/dashboard" element={<Dashboard/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;