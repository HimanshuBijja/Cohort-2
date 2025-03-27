import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import React, { lazy, Suspense } from "react";
const Landing = lazy( () => import("./components/Landing"))
const Dashboard = React.lazy(() => import("./components/Dashboard"))

function App() {
  return (
    <div>
      <BrowserRouter>
        <Appbar></Appbar>
        <Suspense fallback = {<div> loading...</div>}>
        <Routes>
          <Route path="/Dashboard" element={<Dashboard></Dashboard>}></Route>
          <Route path="/" element={<Landing></Landing>}></Route>
        </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

function Appbar() {
  const navigate = useNavigate();
  return (
    <div>
      <button
        onClick={() => {
          navigate("/Dashboard");
        }}
      >
        Dashboard
      </button>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        Landing
      </button>
    </div>
  );
}

export default App;
