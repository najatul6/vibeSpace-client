import { Outlet } from "react-router-dom";
import Header from "../Components/Header/Header";

const Layout = () => {
  return (
    <div>
      <Header/>
      <Outlet />
      <footer>Footer</footer>
    </div>
  );
};

export default Layout;
