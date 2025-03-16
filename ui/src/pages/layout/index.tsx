import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <header>
        <h1>My App Header</h1>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <p>My App Footer</p>
      </footer>
    </>
  );
}

export default Layout;
