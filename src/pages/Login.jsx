import React, { use } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../provider/AuthProvider";

const Login = () => {
  const { signInWithEmail } = use(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    signInWithEmail(email, password).then(() =>
      navigate(location?.state || "/")
    );
  };

  return (
    <>
      <Helmet>
        <title>Login Page | Incubator</title>
      </Helmet>
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 py-12 px-4">
        <div className="bg-white rounded-2xl shadow-2xl p-10 max-w-md w-full flex flex-col items-center">
          <div className="flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-purple-200 to-blue-200 mb-6 shadow">
            <svg
              className="h-12 w-12 text-purple-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
          </div>
          <h2 className="text-3xl font-bold mb-8 text-center text-blue-700">
            Login
          </h2>
          <form onSubmit={handleLogin} className="space-y-6 w-full">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                name="email"
                className="input input-bordered w-full"
                placeholder="hello@example.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <input
                type="password"
                name="password"
                className="input input-bordered w-full"
                placeholder="Password"
              />
            </div>
            <button type="submit" className="btn btn-primary w-full">
              Login
            </button>
          </form>
          <div className="mt-6 text-sm text-gray-500">
            Don't have an account?{" "}
            <Link
              to={"/register"}
              className="text-purple-700 font-semibold hover:underline"
            >
              Register
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
