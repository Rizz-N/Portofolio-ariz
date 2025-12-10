import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Card = ({
  title,
  titleStyle,
  Icon,
  bgColor = "bg-orange-500",
  textColor = "text-white",
  to = "#",
}) => {
  return (
    <div className={`flex flex-col w-80 py-10 px-10 ${bgColor} ${textColor}`}>
      {Icon && <Icon className="text-5xl" />}

      <h1 className={`mt-5 ${titleStyle}`}>{title}</h1>

      <Link to={to} className="flex items-center gap-5 mt-20">
        <p>Order Now</p>
        <FaArrowRight />
      </Link>
    </div>
  );
};

export default Card;
