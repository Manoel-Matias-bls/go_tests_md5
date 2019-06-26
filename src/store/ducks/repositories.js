/**
 * Types
 */
export const Types = {
  GET_REQUEST: 'repositories/GET_REQUEST',
  GET_SUCCESS: 'repositories/GET_SUCCESS',
  GET_FAILURE: 'repositories/GET_FAILURE',
};

/**
 * Reducers
 */

const INITIAL_STATE = {
  data: [],
};

export default function repositories(state = INITIAL_STATE, action) {
  switch (action.type) {
    default:
      return state;
  }
}

/**
 * Action Creators
 */

export const Creators = {
  getRequest: () => ({
    type: Types.GET_REQUEST,
  }),

  getSuccess: data => ({
    type: Types.GET_SUCCESS,
    payload: { data },
  }),

  getFailure: () => ({
    type: Types.GET_FAILURE,
  }),
};
