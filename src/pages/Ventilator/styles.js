/* --------------------------------- IMPORTS ---------------------------------*/
import styled from 'styled-components';

/* --------------------------------- EXPORTS ---------------------------------*/
export const Title = styled.div`
  -ms-flex: 0 0 100%;
  flex: 0 0 100%;
  max-width: 100%;

  h2 {
    text-align: left;
    font-size: 30px;
  }
`;

export const Row = styled.div`
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
  margin-bottom: 2rem;
`;

export const Column = styled.div`
  display: -ms-flexbox;
  display: flex;
  flex-direction: column;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
  margin-bottom: 2rem;

  #video {
    margin: auto 15px;
    padding: 0 0 16px 0;
    width: 100%;
  }

  iframe {
    border-radius: 0.25rem;
    min-height: 400px;
    height: 100% !important;
    margin: auto;
  }
`;
