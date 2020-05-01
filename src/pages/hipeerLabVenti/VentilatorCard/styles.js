/* --------------------------------- IMPORTS ---------------------------------*/
import styled from 'styled-components';

/* --------------------------------- EXPORTS ---------------------------------*/

export const Row = styled.div`
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
`;

export const CardContainer = styled.div`
  position: relative;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-direction: column;
  flex-direction: line;
  min-width: 0;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  height: 100% !important;
  border-radius: 6px;
  padding: 0.5rem;
  width: 100%;

  img {
    border-radius: 0.5rem;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
    width: 100%;
  }
`;
export const Body = styled.div`
  -ms-flex: 1 1 auto;
  flex: 1 1 auto;
  padding: 0.5rem;

  h3 {
    font-size: 1.25rem;
  }

  h4 {
    color: rgba(0, 0, 0, 0.3);
    margin-bottom: 0.5rem;
    font-size: 0.75rem;
    text-align: left !important;
  }

  p {
    text-align: justify !important;
    font-size: 1rem;
  }
`;
