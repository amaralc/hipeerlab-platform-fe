/* --------------------------------- IMPORTS ---------------------------------*/
import styled from "styled-components";

/* --------------------------------- EXPORTS ---------------------------------*/

export const TeamCard = styled.div`
  position: relative;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-direction: column;
  flex-direction: column;
  min-width: 0;
`;
export const TeamImg = styled.img.attrs(props => ({
  src: props.imgPath
}))`
  width: 250px;
  margin: auto;
`;
export const Div = styled.div`
  margin: auto;
`;
export const Row = styled.div`
  margin-bottom: 80px;
  margin-top: 80px;
`;
