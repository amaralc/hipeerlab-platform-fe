import produce from 'immer';

/**
 * Define estado inicial
 */
const INITIAL_STATE = {
  profile: null,
};

export default function user(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@auth/SIGN_IN_SUCCESS':
      return produce(state, (draft) => {
        draft.profile = action.payload.user;
        draft.signed = true;
      });
    default:
      return state;
  }
}
