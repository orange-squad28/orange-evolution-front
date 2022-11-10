import styled from 'styled-components'
// import { Link } from "react-router-dom";

export const SideBarMenu = styled.ul`
  list-style: none;
  display: flex;
  z-index: 100;
 
  @media (max-width: 1024px) {
    flex-flow: column nowrap;
    position: fixed;
    transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
    margin: 0;
    padding: 0;
    top: 5rem;
    right: 0;
    height: 80vh;
    width: 25vw;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
  }
`

export const LinkContent = styled.p`
  color: var(--menu-color);
  display: block;
  font-family: var(--menu-font);
  font-weight: 900;
  text-align: center;
  height: 100%;
  font-size: 24px;
  display: none;
  text-decoration: none;
  
  @media (max-width: 1024px) {
    display: block;
  }

  &:hover {
    color: #15cdfc;
    cursor: pointer;
    transition: 0.1s ease-in-out;
  }
`
