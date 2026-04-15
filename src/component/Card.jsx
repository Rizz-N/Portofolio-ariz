const Card = ({
  title,
  titleStyle,
  Icon,
  bgColor = "bg-orange-500",
  textColor = "text-white",
  to = "#",
}) => {
  return (
    <div
      className={`flex flex-col w-80 pt-10 pb-30 px-10 ${bgColor} ${textColor}`}
    >
      {Icon && <Icon className="text-5xl" />}

      <h1 className={`mt-5 ${titleStyle}`}>{title}</h1>
    </div>
  );
};

export default Card;
