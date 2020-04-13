const initialState = {
    itemList: [],
    loading: true,
};


const reducer = (state = initialState, action) => {

    switch (action.type) {
        case 'ITEMS_REQUESTED':
            return {
                itemList: [],
                loading: true,
                error: null,
            };
        case 'ITEMS_LOADED':
            return {
                itemList: action.payload,
                loading: false,
                error: null,
            };

        case 'ITEMS_ERROR':
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


