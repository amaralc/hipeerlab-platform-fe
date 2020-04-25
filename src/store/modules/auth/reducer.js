/**
 * Defini estado inicial
 */
const INITIAL_STATE = {
  token: '123',
  test: '123',
};

export default function auth(state = INITIAL_STATE, action) {
  switch (action.type) {
    default:
      return state;
  }
}
