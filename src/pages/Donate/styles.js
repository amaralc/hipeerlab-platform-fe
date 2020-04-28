/* --------------------------------- IMPORTS ---------------------------------*/
import styled from 'styled-components';

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
  display: inline-block;
  font-weight: 400;
  text-align: center;
  vertical-align: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  border: 1px solid transparent;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: 0.25rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  color: #fff;
  background-color: #000;
  border-color: #000;

  &:hover {
    background: #007bff;
    border-color: #007bff;
    text-decoration: none;
  }
  &:focus {
    outline: 0;
    box-shadow: 0 0 0 0.2rem #007bff;
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

export const A = styled.a.attrs((props) => ({
  target: '_blank',
  rel: 'noopener noreferrer',
}))``;
