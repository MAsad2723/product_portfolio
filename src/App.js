import { BrowserRouter, Route, Routes } from "react-router-dom";

import Subscription from "./Subscription";
import Dashboard from "./Dashboard";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<Dashboard />} path="/dashboard" />
          <Route element={<Subscription />} path="/*" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
