/* --------------------------------- IMPORTS ---------------------------------*/
import styled from "styled-components";

/* --------------------------------- EXPORTS ---------------------------------*/

export const PartnerCard = styled.div`
  position: relative;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-direction: column;
  flex-direction: column;
  min-width: 0;
`;
export const PartnerImg = styled.img`
  
  margin: auto;
  max-width: 100px;
`;

export const Div = styled.div`
  margin: auto;
`;

export const Title = styled.div`
  -ms-flex: 0 0 100%;
  flex: 0 0 100%;
  max-width: 100%;
  p {
    text-align: center;
    font-size: 30px;
  }
`;

export const Partners = styled.div`
  margin-bottom: 1rem!important;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
`;
