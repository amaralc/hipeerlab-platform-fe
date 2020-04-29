/* --------------------------------- IMPORTS ---------------------------------*/
import styled from 'styled-components';

/* --------------------------------- EXPORTS ---------------------------------*/
export const Select = styled.select`
  border-radius: 4px;
  &:not(:hover) {
    border: 1px solid #fff;
  }
  &:focus {
    outline: 0;
  }
`;
export const Address = styled.address`
  select {
    border-radius: 4px;
    &:not(:hover) {
      border: 1px solid #fff;
    }
    &:focus {
      outline: 0;
    }
  }
  abbr {
    text-decoration: none;
  }
`;
