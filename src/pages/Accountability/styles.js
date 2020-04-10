/* --------------------------------- IMPORTS ---------------------------------*/
import styled from "styled-components";

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
  padding-bottom: 1rem !important;
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
