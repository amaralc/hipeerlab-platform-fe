/**
 * unir todos os sagas
 */
import { all } from "redux-saga/effects";

import auth from "./auth/sagas";
import user from "./user/sagas";
import equip from "./equip/sagas";

export default function* rootSaga() {
  return yield all([auth, user, equip]);
}
