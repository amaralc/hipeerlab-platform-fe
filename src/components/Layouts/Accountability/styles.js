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
