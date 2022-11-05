import React from "react";
import { SideBarMenu, SideBarLink } from "./styled";



const SideBar = ({ open }) => {
  return (
    <SideBarMenu open={open}>
      <SideBarLink to="/">Home</SideBarLink>
      <SideBarLink to="/">Exemple1</SideBarLink>
      <SideBarLink to="/">Exemple2</SideBarLink>
      <SideBarLink to="/">Exemple3</SideBarLink>
      
    </SideBarMenu>
  );
};

export default SideBar;
