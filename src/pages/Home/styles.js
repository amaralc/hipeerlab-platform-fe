/* --------------------------------- IMPORTS ---------------------------------*/
import styled from 'styled-components';

/* --------------------------------- EXPORTS ---------------------------------*/
export const Row = styled.div`
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
`;
export const Title = styled.div`
  -ms-flex: 0 0 100%;
  flex: 0 0 100%;
  max-width: 100%;
  h2 {
    text-align: left;
    font-size: 30px;
  }
`;
export const ButtonDemanda = styled.button`
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
  background-color: #ff6666;
  border-color: #ff6666;

  &:hover {
    background: #de3535;
    border-color: #de3535;
    text-decoration: none;
  }
  &:focus {
    outline: 0;
    box-shadow: 0 0 0 0.2rem #de3535;
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
