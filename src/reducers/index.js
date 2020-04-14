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
            return updateOrder(state, action.payload, 1);

        case 'ITEM_REMOVED_FROM_CART':
            return updateOrder(state, action.payload, -1);
        case 'ALL_ITEMS_REMOVED_FROM_CART':
            let item = state.cartItemList.find(({id}) => id === action.payload);
            return updateOrder(state, action.payload, -item.count);

        default:
            return state;
    }
};

const updateOrder = (state, id, quantity) => {
    const {cartItemList, itemList} = state;
    const itemToAdd = itemList.find((item) => item.id === id);
    const cartItem = cartItemList.find((item) => item.id === id);
    return {
        ...state,
        cartItemList: updateCartItemList(cartItemList, updateCartItem(itemToAdd, cartItem, quantity)),
    };
};


const updateCartItemList = (cartItemList, item) => {
    const idx = cartItemList.findIndex(({id}) => id === item.id);
    if (item.count === 0) {
        return [...cartItemList.slice(0, idx), ...cartItemList.slice(idx + 1)]
    } else if (idx === -1) {
        return [...cartItemList, item];
    } else {
        return [...cartItemList.slice(0, idx), item, ...cartItemList.slice(idx + 1)];
    }
};

const updateCartItem = (item, cartItem = {}, quantity) => {
    const {id = item.id, title = item.title, price = item.price, count = 0} = cartItem;
    return {id, title, count: count + quantity, price};
};

export default reducer;


