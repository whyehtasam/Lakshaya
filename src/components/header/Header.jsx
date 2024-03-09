
const Header = ({title,header,description,className,titleStyle,headerStyle,descStyle}) => {
    return (
      <div className="">
        <div className={"mx-auto md:px-8  sm:py-8 " + className}>
          <p className={"mb-2 font-semibold text-red-800 md:mb-3  " + titleStyle}>
            {title}
          </p>
  
          <h2 className={"mb-4  text-3xl   font-bold text-gray-800 md:mb-6 " + headerStyle}>
            {header}
          </h2>
  
          <p className={"text-gray-500   " + descStyle}>
          {description}
          </p>
        </div>
      </div>
    );
  };
  
  export default Header;