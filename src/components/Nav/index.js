import React from "react"
import styled from "styled-components"
import logo from "../../images/Logo.png"
import "bootstrap/dist/css/bootstrap.min.css"
import "./styles.css"

const StyleNav = styled.div``

const StyledNavBrand = styled.div`
  padding-left: 2rem;
  padding-top: 1rem;
  float: left;
  img {
    width: 215px;
    height: 25px;
  }
`

const StyleNavLinks = styled.ul`
  list-style: none;
  text-align: right;
  padding-top: 0.5rem;

  li {
    display: inline;
    padding-left: 2rem;
  }

  a {
    color: black;
    text-decoration: none;
  }

  a:hover {
    color: grey;
    text-decoration: none;
  }
`
const StyledNavButton = styled.button`
  background-color: #255957;
  color: #ffffff;
  font-weight: bold;
  margin-left: 2rem;
  border-radius: 6px;
  width: 195px;
  height: 55px;
  font-family: Rubik;
  font-style: normal;
  font-size: 17px;
  text-align: center;
  margin-right: 2rem;

  &:hover {
    background-color: #ffffff;
    color: #255957;
  }
`

const index = () => {
  return (
    <StyleNav>
      <StyledNavBrand>
        <a href="#">
          <img src={logo} alt="Tech Teahouse Logo" />
        </a>
      </StyledNavBrand>
      <StyleNavLinks>
        <li>
          <a href="">Home</a>
        </li>
        <li>
          <a href="">Who We Are</a>
        </li>
        <li>
          <a href="">What We Do</a>
        </li>
        <li>
          <a href="">Get In Touch</a>
        </li>
        <StyledNavButton>Become a Partner!</StyledNavButton>
      </StyleNavLinks>
    </StyleNav>
  )
}

export default index
