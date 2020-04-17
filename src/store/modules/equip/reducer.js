import produce from "immer";

const INITIAL_STATE = {
  equipment_name: null,
};

export default function equip(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case "@equip/NEW_EQUIP_SUCCESS": {
        draft.equipment_name = action.payload.equipment_name;
        break;
      }
      default:
    }
  });
}
