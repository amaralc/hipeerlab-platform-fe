/* --------------------------------- IMPORTS ---------------------------------*/
import React from "react";

import { Table } from "./styles";

/* --------------------------------- EXPORTS ---------------------------------*/
export default function TableLayout() {
  return (
    <Table>
      <tr>
        <th>Entradas</th>
        <th>Saídas</th>
        <th>Descrição das Saídas</th>
      </tr>
      <tr>
        <td>R$ 50,00</td>
        <td>R$ 25,00</td>
        <td>Compra de PLA</td>
      </tr>
      <tr>
        <td>R$ 150,00</td>
        <td>R$ 20,00</td>
        <td>Compra de Acetato</td>
      </tr>
      <tr>
        <td>R$ 150,00</td>
        <td>R$ 20,00</td>
        <td>Compra de Acetato</td>
      </tr>
      <tr>
        <td>R$ 150,00</td>
        <td>R$ 20,00</td>
        <td>Compra de Acetato</td>
      </tr>
      <tr>
        <td>R$ 150,00</td>
        <td>R$ 20,00</td>
        <td>Compra de Acetato</td>
      </tr>
      <tr>
        <td>R$ 150,00</td>
        <td>R$ 20,00</td>
        <td>Compra de Acetato</td>
      </tr>
      <tr>
        <td>R$ 150,00</td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>R$ 150,00</td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>R$ 150,00</td>
        <td></td>
        <td></td>
      </tr>
    </Table>
  );
}
