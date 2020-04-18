export function NewEquipRequest(
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
) {
  return {
    type: "@equip/NEW_EQUIP_REQUEST",
    payload: {
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
    },
  };
}

export function NewEquipSuccess() {
  return {
    type: "@equip/NEW_EQUIP_SUCCESS",
  };
}

export function updateEquipFailure() {
  return {
    type: "@equip/NEW_EQUIP_FAILURE",
  };
}
