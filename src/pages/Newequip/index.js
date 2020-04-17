/* --------------------------------- IMPORTS ---------------------------------*/
import React from "react";
import { useDispatch } from "react-redux";
import { Form, Input } from "@rocketseat/unform";
import Header from "../../components/Header";
import { Wrapper, Content } from "./styles";
//*import ImgInput from "./ImgInput";

import { NewEquipRequest } from "../../store/modules/equip/actions";

/* --------------------------------- EXPORTS ---------------------------------*/

export default function Newequip() {
  const dispatch = useDispatch();

  function handleSubmit({
    category,
    equipment_name,
    company,
    model,
    color,
    serial_number,
    comment,
    state,
    room_id,
    image,
  }) {
    console.tron.log(
      category,
      equipment_name,
      company,
      model,
      color,
      serial_number,
      comment,
      state,
      room_id,
      image
    );
    dispatch(
      NewEquipRequest(
        category,
        equipment_name,
        company,
        model,
        color,
        serial_number,
        comment,
        state,
        room_id,
        image
      )
    );
  }
  return (
    <>
      {/* inclui o header nos moldes das paginas de conteudo */}
      <Header headerTitle="Registro de novos equipamentos" />
      <Wrapper>
        <Content>
          <Form onSubmit={handleSubmit}>
            <Input name="category" placeholder="Categoria" />
            <Input name="equipment_name" placeholder="Nome do Equipamento" />
            <Input name="company" placeholder="Fabricante" />
            <Input name="model" placeholder="Modelo" />
            <Input name="color" placeholder="pigmentação" />
            <Input name="serial_number" placeholder="Número Serial" />
            <Input name="comment" placeholder="Comentario" />
            <Input name="state" placeholder="Estado" />
            <Input
              name="room_id"
              type="number"
              placeholder="Sala do equipamento"
            />
            {/*<ImgInput name="image" />*/}
            <Input name="image" placeholder="image" />
            <button type="submit">Cadastrar</button>
          </Form>
        </Content>
      </Wrapper>
    </>
  );
}
