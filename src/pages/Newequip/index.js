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
    responsible_id,
    equipment_name,
    company,
    model,
    ufsc_patrimony,
    feesc_patimony,
    color,
    serial_number,
    comment,
    state,
    room_id,
    image,
    hourly_rate_brl,
  }) {
    console.tron.log(
      category,
      responsible_id,
      equipment_name,
      company,
      model,
      ufsc_patrimony,
      color,
      serial_number,
      comment,
      state,
      room_id,
      image,
      hourly_rate_brl
    );
    dispatch(
      NewEquipRequest(
        category,
        responsible_id,
        equipment_name,
        company,
        model,
        ufsc_patrimony,
        feesc_patimony,
        color,
        serial_number,
        comment,
        state,
        room_id,
        image,
        hourly_rate_brl
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
            <Input
              name="responsible_id"
              type="number"
              placeholder="Responsável"
            />
            <Input name="equipment_name" placeholder="Nome do Equipamento" />
            <Input name="company" placeholder="Fabricante" />
            <Input name="model" placeholder="Modelo" />
            <Input name="ufsc_patrimony" type="number" placeholder="UFSC" />
            <Input name="feesc_patimony" type="number" placeholder="FEESC" />
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
            <Input
              name="hourly_rate_brl"
              type="number"
              placeholder="Custo/hora"
            />
            <button type="submit">Cadastrar</button>
          </Form>
        </Content>
      </Wrapper>
    </>
  );
}
