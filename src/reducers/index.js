const initialState = {
    itemList: [],
    loading: true,
};


const reducer = (state = initialState, action) => {

    switch (action.type) {
        case 'ITEMS_LOADED':
            return {
                itemList: action.payload,
                loading: false
            };

        default:
            return state;
    }


};

export default reducer;


