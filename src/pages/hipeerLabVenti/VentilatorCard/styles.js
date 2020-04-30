/* --------------------------------- IMPORTS ---------------------------------*/
import styled from 'styled-components';

/* --------------------------------- EXPORTS ---------------------------------*/

export const CardContainer = styled.div`
  position: relative;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-direction: column;
  flex-direction: row;
  min-width: 0;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 0.25rem;
  height: 100% !important;

  img {
    border-top-left-radius: calc(0.25rem - 1px);
    border-top-right-radius: calc(0.25rem - 1px);

  }
`;
export const Body = styled.div`
  -ms-flex: 1 1 auto;
  flex: 1 1 auto;
  padding: 1.25rem;


  h5 {
    margin-bottom: 0.75rem;
  }

  p:last-child {
    margin-bottom: 0;
  }

  h5,
  p {
    text-align: left !important;
    font-size: 20px
  }
`;

