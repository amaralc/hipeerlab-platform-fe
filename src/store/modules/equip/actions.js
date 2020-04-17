export function NewEquipRequest(
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
) {
  return {
    type: "@equip/NEW_EQUIP_REQUEST",
    payload: {
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
