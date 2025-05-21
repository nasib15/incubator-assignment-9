import { Link } from "react-router";

const UserCard = ({ item }) => {
  return (
    <Link
      to={`/details/${item.id}`}
      className="group bg-white rounded-xl shadow-lg p-8 flex flex-col items-center hover:scale-105 hover:shadow-2xl transition-transform border border-gray-100 cursor-pointer"
    >
      <img
        src={item.image}
        alt="Alternative text"
        className="w-24 h-24 rounded-full object-cover mb-4 border-4 border-purple-200 group-hover:border-purple-400 transition-all"
      />
      <h3 className="text-xl font-semibold mb-1 text-purple-800 group-hover:text-purple-600 transition-colors">
        {item.title}
      </h3>
      <span className="text-sm text-gray-500 mb-2">Top Developer</span>
      <p className="text-gray-600 text-center text-sm">{item.description}</p>
    </Link>
  );
};
export default UserCard;
