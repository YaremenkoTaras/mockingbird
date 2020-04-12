const initialState = {
    itemList: [],

};


const reducer = (state = initialState, action) => {

    switch (action.type) {
        case 'ITEMS_LOADED':
            return {
                itemList: action.payload,
            };

        default:
            return state;
    }


};

export default reducer;


