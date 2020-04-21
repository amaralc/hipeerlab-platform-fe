/* --------------------------------- IMPORTS ---------------------------------*/
import styled from "styled-components";

/* --------------------------------- EXPORTS ---------------------------------*/

export const HeaderDiv = styled.header`
  background-color: #343a40 !important;
  padding-top: 1.5rem !important;
  padding-bottom: 1.5rem !important;
  margin-bottom: 1.5rem !important;
`;
export const Container = styled.div`
  width: 100% !important;
  padding-right: 15px !important;
  padding-left: 15px !important;
  margin-right: auto !important;
  margin-left: auto !important;
  height: 100% !important;
`;

export const Row = styled.div`
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
  height: 100% !important;
  -ms-flex-align: center !important;
  align-items: center !important;
`;

export const Div = styled.div`
  position: relative;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  -ms-flex: 0 0 100%;
  flex: 0 0 100%;
  max-width: 100%;

  h1 {
    font-size: 3.5rem;
    font-weight: 300;
    line-height: 1.2;
    color: #fff !important;
    margin-top: 3rem !important;
    margin-bottom: 0.5rem !important;
  }

  p {
    font-size: 1.25rem;
    font-weight: 300;
    margin-bottom: 3rem !important;
    color: #fff !important;
  }
`;
