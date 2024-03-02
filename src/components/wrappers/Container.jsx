import React from "react";

const Container = ({ children,style }) => {
  return <div className={"lg:max-w-[90rem] lg:p-10 p-6 mx-auto " + style}>{children}</div>;
};

export default Container;
