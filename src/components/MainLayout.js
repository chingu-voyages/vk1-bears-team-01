import React from "react";
import NavBar from "./NavBar";
import NavBarTwo from "./NavBarTwo";

const MainLayout = ({ children }) => {
  return (
    <div>
      <NavBarTwo />
      {children}
    </div>
  );
};

export default MainLayout;
