/* --------------------------------- IMPORTS ---------------------------------*/
import styled from "styled-components";

/* --------------------------------- EXPORTS ---------------------------------*/
export const Table = styled.table`
  table,
  th,
  td {
    border: 1px solid rgba(0, 0, 0, 0.125);
  }
  table {
    min-width: 0;
    word-wrap: break-word;
    background-color: #fff;
    background-clip: border-box;
    border-radius: 0.25rem;
  }
  th {
    padding: 0.75rem 1.25rem;
    background-color: rgba(0, 0, 0, 0.03);
    border-top: 1px solid rgba(0, 0, 0, 0.125);
  }
`;
