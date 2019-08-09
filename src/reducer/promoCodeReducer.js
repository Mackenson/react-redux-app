import { PROMO_CODE } from '../actions/actionTypes';

const initialState = {
  open: false,
  value: ''
};

const promoCodeReducer = function (state = initialState, action) {
  switch (action.types) {
    case PROMO_CODE.PROMO_CODE:
    return{
      ...state,
      value: action.payload
    }
    default:
      return state
  }
}

export default promoCodeReducer;
