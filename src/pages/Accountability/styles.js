/* --------------------------------- IMPORTS ---------------------------------*/
import styled from "styled-components";

/* --------------------------------- EXPORTS ---------------------------------*/

export const Table = styled.table`
  width: 100%;
  margin-bottom: 1rem;
  border-radius: 5px !important;

  th,
  td {
    padding: 10px 20px 10px 20px;
    border: 1px solid rgba(0, 0, 0, 0.125);
    text-align: center;
  }
  th {
    background-color: rgba(0, 0, 0, 0.03);
  }
`;

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
export const TeamImg = styled.img.attrs((props) => ({
  src: props.imgPath,
}))`
  width: 100px;
  border-radius: 50%;
`;
export const Div = styled.div`
  margin: auto;
  margin-top: 0;
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

export const SubTitle = styled.div`
  -ms-flex: 0 0 100%;
  flex: 0 0 100%;
  max-width: 100%;
  p {
    text-align: left;   
    font-size: 20px;
  }
`;

export const Description = styled.div`
  -ms-flex: 0 0 100%;
  flex: 0 0 100%;
  max-width: 100%;
  p {
    text-align: left;    
  }
`;

export const InImg = styled.img.attrs((props) => ({
  src: props.imgPath,
}))`
  margin-top: -10px;
  width: 40px;
`;
export const Name = styled.p`
  font-weight: bold;
  margin-top: 10px;
  text-align: center;
`;

export const About = styled.p`
  margin-top: 10px;
  text-align: center;
  font-size: 14px;
`;
