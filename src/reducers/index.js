import updateItemList from "./item-list";
import updateShoppingCart from "./shopping-cart";

const reducer = (state, action) => {
    return {
        itemList: updateItemList(state, action),
        shoppingCart: updateShoppingCart(state, action),
    }
};

export default reducer;
