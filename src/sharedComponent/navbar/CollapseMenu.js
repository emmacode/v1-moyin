import React from 'react';
import styled from 'styled-components';
import { NavLink } from "react-router-dom";

import { useSpring, animated } from 'react-spring';

const CollapseMenu = (props) => {
  const { open } = useSpring({ open: props.navbarState ? 0 : 1 });

  if (props.navbarState === true) {
    return (
      <CollapseWrapper style={{
        transform: open.interpolate({
          range: [0, 0.2, 0.3, 1],
          output: [0, -20, 0, -200],
        }).interpolate(openValue => `translate3d(0, ${openValue}px, 0`),
      }}
      >
        <NavLinks>
          <li className="nav-link moyin__link">
            <NavLink style={{ textDecoration: "none" }} to="/">
              Projects
            </NavLink>
          </li>
          <li className="nav-link moyin__link">
            <NavLink style={{ textDecoration: "none" }} to="/about">
              About
            </NavLink>
          </li>
          <li className="nav-link moyin__link">
            <NavLink style={{ textDecoration: "none" }} to="/contact">
              Contact
            </NavLink>
          </li>
        </NavLinks>
      </CollapseWrapper>
    );
  }
  return null;
};

export default CollapseMenu;

const CollapseWrapper = styled(animated.div)`
  background: #00003f;
  position: fixed;
  top: 5.5rem;
  left: 0;
  right: 0;
  z-index: 1;
`;

const NavLinks = styled.ul`
  list-style-type: none;
  padding: 2rem 1rem 2rem 2rem;
  
  & li {
    transition: all 300ms linear 0s;
  }

  & a {
    font-size: 1.4rem;
    line-height: 2;
    color: #000;
    text-transform: uppercase;
    text-decoration: none;
    cursor: pointer;

    &:hover {
      color: #443ae5;
      border-bottom: 1px solid #443ae5;
    }
  }
`;

