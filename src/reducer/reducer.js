// const jsonData = require('../data/data.json');
import { data } from '../data/data';

// Action Constants
const POPULATE = 'POPULATE';

// Action Creators
export const populate = () => {
  return dispatch => {
    let payload = data;
    return dispatch({ type: POPULATE, payload });
  };
};

// Initial State
let initialState = data;

// Reducer
export default (state = initialState, action) => {
  let { type, payload } = action;

  switch (type) {
    case 'POPULATE':
      return { ...payload };
    default:
      return state;
  }
};
