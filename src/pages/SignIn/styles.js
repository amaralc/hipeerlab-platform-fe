/* --------------------------------- IMPORTS ---------------------------------*/
import styled from 'styled-components';
import { darken } from 'polished';

/* --------------------------------- EXPORTS ---------------------------------*/

export const Wrapper = styled.div`
  height: 75vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  margin-bottom: 1.5rem;
  width: 100%;
  max-width: 315px;
  text-align: center;

  img {
    margin-bottom: 1.5rem;
    height: 3rem;
  }

  form {
    display: flex;
    flex-direction: column;

    input {
      background: rgba(0, 0, 0, 0.07);
      border: 0;
      border-radius: 4px;
      height: 2.5rem;
      padding: 0 15px;
      color: rgba(0, 0, 0, 0.5);
      margin: 0.75rem 0 0;
      text-align: center;

      &::placeholder {
        color: rgba(0, 0, 0, 0.5);
      }
    }

    span {
      color: #ff6f91;
      align-self: center;
      margin: 0 0 10px;
      font-size: 0.75rem;
    }

    button {
      margin: 1.5rem 0 0;
      height: 2.5rem;
      background: #000;
      color: #fff;
      border: 0;
      border-radius: 4px;
      font-size: 16px;
      transition: background 0.2s;

      &:hover {
        background: #38b6ff;
      }
    }

    a {
      margin: 0.75rem 0 0;
      color: #38b6ff;
      font-size: 1rem;
      opacity: 0.8;

      &:hover {
        color: ${darken(0.2, '#38b6ff')};
      }
    }
  }
`;
