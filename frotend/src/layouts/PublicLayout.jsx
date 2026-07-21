import { Outlet } from "react-router-dom";
import PublicNavbar from "../components/layout/PublicNavbar";

function PublicLayout() {
  return (
    <>
      <PublicNavbar />

      <main className="pt-20">
        <Outlet />
      </main>
    </>
  );
}

export default PublicLayout;