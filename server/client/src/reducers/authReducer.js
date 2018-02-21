import { FETCH_USER } from '../actions/types';

export default function(state = null, action) {
  switch (action.type) {
    case FETCH_USER:
      return action.payload || false; //Returns false in case the payload si empty
    default:
      return state;
  }
}
