/* --------------------------------- IMPORTS ---------------------------------*/
import styled from "styled-components";

/* --------------------------------- EXPORTS ---------------------------------*/
export const Title = styled.div`
  -ms-flex: 0 0 100%;
  flex: 0 0 100%;
  max-width: 100%;

  h2 {
    text-align: left;
    font-size: 30px;
  }
`;

export const Button = styled.button`
  top: -1px;
  position: relative;
  z-index: 2;
  display: inline-block;
  margin: 5px 0 0;
  height: 48px;
  background-color: #343a40;
  color: #fff;
  font-weight: 400;
  border: 1px solid transparent;
  border-radius: 0.3rem;
  font-size: 1.25rem;
  line-height: 1.5;
  transition: background 0.2s;
  text-align: center;
  vertical-align: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  line-height: 1.5;
  padding: 0.5rem 1rem;
  vertical-align: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

  &:hover {
    background: #f4d75d;
    text-decoration: none;
  }
  &:focus {
    outline: 0;
    box-shadow: 0 0 0 0.2rem #f4d75d;
    z-index: 3;
  }
  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }

  a {
    text-decoration: none;
    color: #fff;
  }
`;
