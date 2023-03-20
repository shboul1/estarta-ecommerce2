import * as CART_CONSTANTS from "./constants";

const initState = {
  cartItems: [],
};
export default function cartReducer(state = initState, action) {
  switch (action.type) {
    case CART_CONSTANTS.ADD_TO_CART:
      const ItemExist = state.cartItems?.find(
        (item) => item.id === action.payload.id
      );

      if (ItemExist) {
        const EditedItems = state.cartItems.map((item) => {
          if (item.id === action.payload.id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });

        return {
          cartItems: EditedItems,
        };
      } else {
        return {
          cartItems: [...state.cartItems, { ...action.payload, quantity: 1 }],
        };
      }

    case CART_CONSTANTS.REMOVE_FROM_CART:
      const EditedItems = state.cartItems.map((item) => {
        if (item?.id === action.payload.id) {
          if (item?.quantity !== 1) {
            return { ...item, quantity: item?.quantity - 1 };
          }
        } else {
          return item;
        }
      });

      return {
        cartItems: EditedItems.filter(Boolean),
      };

    default:
      return state;
  }
}
