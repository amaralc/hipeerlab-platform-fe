import { all, call, put, takeLatest } from "redux-saga/effects";
import { toast } from "react-toastify";

import api from "../../../services/api";
import { NewEquipSuccess, updateEquipFailure } from "./actions";
import history from "../../../services/history";

export function* newEquip({ payload }) {
  try {
    const {
      category,
      equipment_name,
      company,
      model,
      state,
      color,
      room_id,
      serial_number,
      comments,
      image,
    } = payload;
    console.tron.log(payload);
    yield call(api.post, "equipment", {
      category,
      equipment_name,
      company,
      model,
      state,
      color,
      room_id,
      serial_number,
      comments,
      image,
    });

    toast.success("Equipamento cadastrado com sucesso!");
    yield put(NewEquipSuccess());
    history.push("/listequipment");
  } catch (err) {
    toast.error("Erro ao cadastrar, confira seus dados!");
    yield put(updateEquipFailure());
    history.push("/cadastroequip");
  }
}

export default all([takeLatest("@equip/NEW_EQUIP_REQUEST", newEquip)]);
