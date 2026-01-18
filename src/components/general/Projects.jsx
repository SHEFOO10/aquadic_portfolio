import { Link } from "react-router";

// eslint-disable-next-line react/prop-types
const Projects = ({ id, image, title, type }) => {
  return (
    <Link
      to={`/portfolio/${id}`}
      className="flex flex-col items-center mt-14 hover:opacity-90 transition-opacity"
    >
      <div className="w-[150px] h-[150px] flex items-center justify-center bg-gray-50 rounded-2xl mb-6 shadow-sm">
        <img src={image} className="w-24 h-24 object-contain" alt={title} />
      </div>
      <h2 className="text-[#121212] text-[28px] font-semibold mb-2 text-center">
        {title}
      </h2>
      <p className="text-[#5D5D5D] font-medium text-xl">{type}</p>
    </Link>
  );
};

export default Projects;
