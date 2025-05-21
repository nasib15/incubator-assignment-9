import { use } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../provider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = use(AuthContext);
  const navigate = useNavigate();

  const handleLogOut = () => {
    logOut().then(() => navigate("/"));
  };

  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/contact"}>Contact</Link>
            </li>
            <li>
              <Link to={"/my-profile"}>My Profile</Link>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/contact"}>Contact</Link>
          </li>
          <li>
            <Link to={"/my-profile"}>My Profile</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <div>
            <div className="dropdown dropdown-end mr-6">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full" title={user?.displayName}>
                  <img
                    alt="Tailwind CSS Navbar component"
                    src={user?.photoURL}
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                <li>
                  <a className="justify-between">{user?.displayName}</a>
                </li>
              </ul>
            </div>
            <button onClick={handleLogOut} className="btn">
              Logout
            </button>
          </div>
        ) : (
          <div>
            <Link to={"/login"} className="btn mr-6">
              Login
            </Link>
            <Link to={"/register"} className="btn">
              Register
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};
export default Navbar;
