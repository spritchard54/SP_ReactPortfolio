import { Header } from "./Header";
import { Footer } from "./Footer";
import { Outlet } from "react-router-dom";

export function Layout() {
  return (
    <>
      <Header />

      <main>
        <div className="page-content" >
        <Outlet />
        </div>
      </main>

      <Footer />
    </>
  );
}
