import { Outlet } from "react-router-dom";
import Header from "../Components/Header/Header";
import Footer from "../Components/Shared/Footer/Footer";

const Layout = () => {
  return (
    <div>
      <Header/>
      <Outlet />
      <Footer/>
    </div>
  );
};

export default Layout;
