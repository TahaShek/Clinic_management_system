import "./App.css";
import { Outlet } from "react-router-dom";
import { Suspense } from "react";

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <main>
        <Outlet />
      </main>
    </Suspense>
  );
}

export default App;
