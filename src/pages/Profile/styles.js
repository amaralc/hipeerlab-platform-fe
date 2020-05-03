import styled from 'styled-components';
import { lighten } from 'polished';

export const Container = styled.div`
  max-width: 315px;
  margin: 50px auto;

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

    hr {
      border: 0;
      width: 75%;
      height: 1px;
      background: rgba(0, 0, 0, 0.05);
      align-self: center;
      margin: 1.5rem 0 0.75rem;
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
  }

  > button {
    margin: 0.75rem 0 0;
    height: 2.5rem;
    width: 100%;
    background: #eb2a2a;
    color: #fff;
    border: 0;
    border-radius: 4px;
    font-size: 16px;
    transition: background 0.2s;

    &:hover {
      background: ${lighten(0.08, '#eb2a2a')};
    }
  }
`;
