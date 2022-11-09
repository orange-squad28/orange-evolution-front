import styled from "styled-components";
// import { Link } from "react-router-dom";


export const SideBarMenu = styled.ul`
  list-style: none;
  display: flex;

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: white;
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    margin: 0;
    padding: 0;
    top: 0;
    right: 0;
    height: 30vh;
    width: 25vw;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
  }
`;

export const SideBarLink = styled.a`
  color: #000;
  display: block;
  font-weight: bold;
  text-align: center;
  height: 100%;
  font-size: 24px;
  display: none;
  text-decoration: none;
  @media (max-width: 768px) {
    display: block;
  }
  &:hover {
    color: #15cdfc;
    cursor: pointer;
    transition: 0.1s ease-in-out;
  }
`;
