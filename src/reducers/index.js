const initialState = {
    itemList: [],
    loading: true,
    error: null,
    cartItemList: [
        {
            id: 1,
            name: 'Book1',
            count: 2,
            price: 20,
            total: 40,
        },
        {
            id: 2,
            name: 'Book2',
            count: 3,
            price: 30,
            total: 90,
        },
    ],
    orderTotal: 300,
};


const reducer = (state = initialState, action) => {

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


        default:
            return state;
    }


};

export default reducer;


