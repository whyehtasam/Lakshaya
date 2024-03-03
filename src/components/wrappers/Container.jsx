import React from "react";


const Container = ({ children,className }) => {
  return <div className={"lg:max-w-[100vw] lg:p-10 p-6 mx-auto " + className}>{children}</div>;
};

export default Container;
