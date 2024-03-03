import React from "react";

const Container = ({ children,style }) => {
  return <div className={"lg:max-w-[100vw] lg:p-10 p-6  " + style}>{children}</div>;
};

export default Container;
