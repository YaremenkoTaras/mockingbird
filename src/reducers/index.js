const initialState = {
    itemList: [],
    loading: true,
    error: null,
    cartItemList: [],
    orderTotal: 300,
};


const reducer = (state = initialState, action) => {

    console.info(`Action: ${action.type}`);

    switch (action.type) {
        case 'FETCH_ITEMS_REQUEST':
            return {
                ...state,
                itemList: [],
                loading: true,
                error: null,
            };
        case 'FETCH_ITEMS_SUCCESS':
            return {
                ...state,
                itemList: action.payload,
                loading: false,
                error: null,
            };

        case 'FETCH_ITEMS_FAILURE':
            return {
                ...state,
                itemList: [],
                loading: false,
                error: action.payload,
            };
        case 'ITEM_ADDED_TO_CART':
            const id = action.payload;
            const {cartItemList, itemList} = state;
            const itemToAdd = itemList.find((item) => item.id === id);
            const itemPosition = cartItemList.findIndex((item) => item.id === id);
            const cartItem = cartItemList[itemPosition];
            const updatedCartItem = updateCartItem(itemToAdd, cartItem);
            return {
                ...state,
                cartItemList: updateCartItemList(cartItemList, updatedCartItem, itemPosition),
            };

        default:
            return state;
    }
};

const updateCartItemList = (cartItemList, item, idx) => {
    if (idx === -1) {
        return [...cartItemList, item];
    } else {
        return [...cartItemList.slice(0, idx), item, ...cartItemList.slice(idx + 1)];
    }
}

const updateCartItem = (item, cartItem = {}) => {
    const {id = item.id, title = item.title, price = item.price, count = 0} = cartItem;
    return {id, title, count: count + 1, price};
};


export default reducer;


