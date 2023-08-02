import * as ActionType from "../contraints/cartConstants";

const cartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case ActionType.ADD_TO_CART:
      // find item
      const item = action.payload;
      // check if item exists
      const isItemexist = state.cartItems.find(
        (product) => product.id === item.id
      );
      // if same item exists then dont add again if not then add
      if (isItemexist) {
        return {
          ...state,
          cartItems: state.cartItems.map((data) =>
            data.product === item.product ? item : data
          ),
        };
      } else {
        return { ...state, cartItems: [...state.cartItems, item] };
      }

    case ActionType.REMOVE_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (product) => product.id !== action.payload
        ),
      };

    default:
      return state;
  }
};

export default cartReducer;
