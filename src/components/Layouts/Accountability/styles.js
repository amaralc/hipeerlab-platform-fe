/* --------------------------------- IMPORTS ---------------------------------*/
import styled from "styled-components";

/* --------------------------------- EXPORTS ---------------------------------*/

export const Table = styled.table`
  width: 100%;
  margin-bottom: 1rem;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 5px !important;

  th,
  td {
    padding: 0.75rem;
    /*border: 1px solid rgba(0, 0, 0, 0.125);*/
    text-align: left;
  }
  th {
    background-color: rgba(0, 0, 0, 0.03);
  }
`;
