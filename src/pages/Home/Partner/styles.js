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
export const PartnerImg = styled.img.attrs((props) => ({
  src: props.imgPath,
}))`
  height: 100px;
  margin: auto;
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
