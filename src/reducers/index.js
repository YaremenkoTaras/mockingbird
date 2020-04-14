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
            const itemToAdd = state.itemList.find((item) => item.id === id);
            const newCartItem = {
                id: itemToAdd.id,
                name: itemToAdd.title,
                count: 1,
                price: itemToAdd.price,
                total: itemToAdd.price,
            };
            return {
                ...state,
                cartItemList: [
                    ...state.cartItemList,
                    newCartItem
                ]
            };

        default:
            return state;
    }


};

export default reducer;


