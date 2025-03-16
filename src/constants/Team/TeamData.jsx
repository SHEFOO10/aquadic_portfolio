// eslint-disable-next-line react/prop-types
const Card = ({ image, name, position }) => {
  return (
    <div className="">
      <div>
        <img
          src={image}
          alt={name}
          className="w-[400px] h-[400px] object-cover"
        />
        <p className="text-[#121212] font-semibold xl:text-[44px] lg:text-[36px] text-[27px] text-center mt-6">
          {name}
        </p>
        <p className="text-[#5D5D5D] font-medium lg:text-2xl text-lg leading-6 text-center md:mt-6">
          {position}
        </p>
      </div>
    </div>
  );
};

export default Card;
