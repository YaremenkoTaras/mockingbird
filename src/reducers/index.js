const initialState = {
    itemList: [],
    loading: true,
};


const reducer = (state = initialState, action) => {

    switch (action.type) {
        case 'FETCH_ITEMS_REQUEST':
            return {
                itemList: [],
                loading: true,
                error: null,
            };
        case 'FETCH_ITEMS_SUCCESS':
            return {
                itemList: action.payload,
                loading: false,
                error: null,
            };

        case 'FETCH_ITEMS_FAILURE':
            return {
                itemList: [],
                loading: false,
                error: action.payload,
            };

        default:
            return state;
    }


};

export default reducer;


