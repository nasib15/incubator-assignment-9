import { Outlet } from "react-router";
import Navbar from "../components/Navbar";

const HomeLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};
export default HomeLayout;
