import React from 'react'
import styled from "styled-components";
import { NavLink } from "react-router-dom";

import logo from "../../assets/logo.png";

const Brand = () => {
  return (
    <NavLink to="/">
      <Image src={logo} alt="Moyin Logo" />
    </NavLink>
  )
}

export default Brand

const Image = styled.img`
  height: 85%;
  margin: auto 0;
  padding-top: 2rem;
`;