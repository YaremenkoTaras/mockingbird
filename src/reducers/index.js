import updateItemList from "./item-list";
import updateShoppingCart from "./shopping-cart";

const reducer = (state, action) => {
    console.info(`Action: ${action.type}`);
    return {
        itemList: updateItemList(state, action),
        shoppingCart: updateShoppingCart(state, action),
    }
};

export default reducer;
