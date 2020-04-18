import { all, call, put, takeLatest } from "redux-saga/effects";
import { toast } from "react-toastify";

import api from "../../../services/api";
import history from "../../../services/history";
import { NewEquipSuccess, updateEquipFailure } from "./actions";

export function* newEquip({ payload }) {
  try {
    /*const {
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
    } = payload;
    console.tron.log(
      category,
      responsible_id,
      equipment_name,
      company,
      model,
      ufsc_patrimony,
      feesc_patimony
    );*/
    yield call(
      api.post,
      "equipment",
      payload /*{
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
    }*/
    );

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
