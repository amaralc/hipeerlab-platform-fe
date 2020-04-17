import styled from "styled-components";

export const Container = styled.div`
  align-self: center;
  background: #343a40;
  border: 0;
  border-radius: 4px;
  width: 100%;
  margin: 0 0 10px;

  label {
    cursor: pointer;

    &:hover {
      opacity: 0.7;
    }

    img {
      object-fit: cover;
      height: 90px;
      width: 120px;
      background: #343a40;
      margin-top: 10px;
    }

    input {
      display: none;
    }
  }
`;
