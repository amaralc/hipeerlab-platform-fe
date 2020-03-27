/* --------------------------------- IMPORTS ---------------------------------*/
import React from "react";

import { Table } from "./styles";

/* --------------------------------- EXPORTS ---------------------------------*/
export default function TableLayout(props) {
  return (
    <div>
      <Table>
        <tr>
          <th>Entradas</th>
          <th>Saídas</th>
          <th>Descrição</th>
        </tr>
        <tr>
          <td>Peter</td>
          <td>Griffin</td>
          <td>Griffin</td>
        </tr>
        <tr>
          <td>Lois</td>
          <td>Griffin</td>
          <td>Griffin</td>
        </tr>
      </Table>
    </div>
  );
}
