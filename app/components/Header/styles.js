import styled from "styled-components";
import Link from "next/link";
import { MenuOutlined } from "@ant-design/icons";

export const HeaderSection = styled("header")`
  padding: 1rem 0.5rem;
  display: flex;
  justify-content: space-between;  /* Space out logo and nav links */
  align-items: center;  /* Center the logo and links vertically */

    @media only screen and (max-width: 1140px) {
    padding: 0.5rem 0.5rem;
    .nav-links {
      display: none;
    }
    .burger {
      display: block;
    }
  }
`;


export const LogoContainer = styled(Link)`
  display: flex;
  align-items: center; /* Vertically align the logo */
  justify-content: center; /* Centers the logo horizontally */
  margin-right: 2rem; /* Adjust margin to create space between logo and nav links */

  /* Optionally, you can limit the width of the logo to avoid layout issues */
  max-width: 220px;
  height: auto;
`;

export const NavLink = styled("div")`
  display: inline-block;
  text-align: center;

  @media only screen and (max-width: 1144px) {
    display: none; /* Hide nav links below 1144px */
  }
`;

export const CustomNavLink = styled("div")`
  width: 203px;
  display: inline-block;

  @media only screen and (max-width: 411px) {
    width: 150px;
  }

  @media only screen and (max-width: 320px) {
    width: 118px;
  }
`;

export const Burger = styled("div")`
  display: none; /* Hidden by default */

  @media only screen and (max-width: 1140px) {
    display: block;
    position: relative; /* Needed to use the top property */
    top: 20px; /* Adjust this value to move the burger lower */
  }

  svg {
    fill: #2e186a;
  }
`;

export const NotHidden = styled("div")`
  @media only screen and (max-width: 890px) {
    display: none;
  }
`;

export const Menu = styled("h5")`
  font-size: 1.5rem;
  font-weight: 600;
  text-align: center;
`;

export const CustomNavLinkSmall = styled(NavLink)`
  font-size: 1.2rem;
  color: #18216d;
  transition: color 0.2s ease-in;
  margin: 0.5rem 2rem;

  @media only screen and (max-width: 768px) {
    margin: 1.25rem 2rem;
  }
`;

export const Label = styled("span")`
  font-weight: 500;
  color: #404041;
  text-align: right;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;

export const Outline = styled(MenuOutlined)`
  font-size: 22px;
`;

export const Span = styled("span")`
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover,
  &:active,
  &:focus {
    color: rgb(255, 130, 92);
    text-underline-position: under;
    text-decoration: rgb(255, 130, 92) wavy underline;
  }
`;

export const Hover = styled("span")`
  cursor: pointer;
  font-family: bely-display, sans-serif;
  position: relative; /* Required for positioning the pseudo-element */

  /* Adding transition for smooth color and underline changes */
  transition: all 0.3s ease-in-out;

  /* Adding ::before pseudo-element for the scaling effect */
  &::before {
    content: ""; /* Creates an empty box before the text */
    position: absolute;
    bottom: -4px; /* Added negative margin to create space between text and the underline */
    left: 0;
    width: 100%;
    height: 2px; /* Underline thickness */
    background-color: rgb(255, 130, 92); /* Underline color */
    transform-origin: 100% 50%; /* Starts from the right */
    transform: scale3d(0, 1, 1); /* Initially scaled to 0 (hidden) */
    transition: transform 0.3s ease; /* Smooth transition for scaling */
  }

  /* On hover, animate the scale effect and transform to make it visible */
  &:hover::before {
    transform-origin: 0% 50%; /* Changes the origin point to left on hover */
    transform: scale3d(1, 1, 1); /* Expand the underline from 0 to full width */
  }

  /* On hover, change the color of the link */
  &:hover,
  &:active,
  &:focus {
    color: rgb(255, 130, 92); /* Change the text color on hover */
  }
`;

