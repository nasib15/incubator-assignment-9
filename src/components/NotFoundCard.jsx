import React from "react";
import { Link } from "react-router";

const NotFoundCard = () => (
  <div className="flex flex-col items-center justify-center py-20 min-h-[calc(100vh-100px)]">
    <div className="flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-purple-100 to-blue-100 mb-6">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-12 w-12 text-purple-600"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 8v4m0 4h.01M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9 9 4.03 9 9z"
        />
      </svg>
    </div>
    <h2 className="text-3xl font-bold text-purple-700 mb-2">Not Found</h2>
    <p className="text-gray-600 mb-6 text-center max-w-xs text-lg">
      Sorry, the feature you are looking for does not exist or has been removed.
    </p>
    <Link
      to="/"
      className="btn btn-primary px-6 py-2 rounded-full text-white shadow hover:scale-105 transition-transform"
    >
      Go Home
    </Link>
  </div>
);

export default NotFoundCard;
