/* --------------------------------- IMPORTS ---------------------------------*/
import styled from 'styled-components';

/* --------------------------------- EXPORTS ---------------------------------*/
export const Title = styled.div`
  -ms-flex: 0 0 100%;
  flex: 0 0 100%;
  max-width: 100%;
  padding-top: 1rem !important;
  padding-bottom: 1rem !important;
  margin-bottom: 1rem !important;
  h2 {
    text-align: left;
    font-size: 30px;
  }
`;

export const SubTitle = styled.div`
  -ms-flex: 0 0 100%;
  flex: 0 0 100%;
  max-width: 100%;
  padding-top: 1rem !important;
  margin-bottom: 1rem !important;
  p {
    text-align: left;
    font-size: 20px;
  }
`;

export const Row = styled.div`
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
`;
export const Select = styled.select`
  border-radius: 4px;
  text-align: left;
  font-size: 1.5rem;
  -ms-flex: 0 0 100%;
  flex: 0 0 100%;
  max-width: 100%;
  margin: 10px 2px -3px -5px;
  font-weight: 400;
  color: #fff;
  background-color: #000;

  padding: 0 0 0 0.5rem;
  option {
    font-weight: 500;
  }

  &:not(:hover) {
    border: 1px solid #fff;
  }
  &:focus {
    outline: 0;
    border-radius: 4px 4px 0 0;
  }
`;
