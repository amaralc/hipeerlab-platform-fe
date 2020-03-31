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
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  align-items: center;
`;
export const TeamImg = styled.img.attrs(props => ({
  src: props.imgPath
}))`
  width: 200px;
  border-radius: 50%;
`;
