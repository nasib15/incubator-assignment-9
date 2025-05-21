import React from "react";
import { useLoaderData, useParams } from "react-router";
import NotFoundCard from "../components/NotFoundCard";

const DetailsPage = () => {
  const data = useLoaderData();
  const { id } = useParams();

  const singleData = data.find((item) => item.id.toString() === id.toString());

  if (!singleData) return <NotFoundCard />;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white py-16 px-4">
      <div className="bg-white rounded-xl shadow-xl p-10 max-w-lg w-full flex flex-col items-center">
        <img
          src={singleData.image}
          alt="Alternative text"
          className="w-32 h-32 rounded-full object-cover mb-6 border-4 border-purple-200"
        />
        <h1 className="text-3xl font-bold text-purple-700 mb-2 text-center">
          {singleData.title}
        </h1>
        <h2 className="text-lg text-gray-500 mb-4 text-center">
          Top Developer
        </h2>
        <p className="text-gray-700 text-center text-lg mb-6">
          {singleData.description}
        </p>
        <span className="inline-block bg-purple-100 text-purple-700 px-4 py-1 rounded-full text-xs font-semibold">
          ID: {id}
        </span>
      </div>
    </div>
  );
};

export default DetailsPage;
