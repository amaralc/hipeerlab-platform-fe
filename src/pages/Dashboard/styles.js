import styled from 'styled-components';

export const Container = styled.div`
  max-width: 600px;
  margin: 50px auto;
  display: flex;
  flex-direction: column;

  header {
    display: flex;
    align-self: center;
    align-items: center;

    button {
      border: 0;
      background: none;
    }

    strong {
      color: #000;
      font-size: 1.25rem;
      margin: 0 15px;
    }
  }

  ul {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 15px;
    margin-top: 30px;
    list-style-type: none;
  }
`;

export const Time = styled.li`
  padding: 20px;
  border-radius: 4px;
  background: rgba(0, 0, 0, 0.5);
  opacity: ${(props) => (props.past ? 0.3 : 1)};

  strong {
    display: block;
    color: ${(props) => (props.available ? '#fff' : '#000')};
    font-size: 20px;
    font-weight: normal;
  }

  span {
    display: block;
    margin-top: 3px;
    color: ${(props) => (props.available ? '#999' : '#000')};
  }
`;
