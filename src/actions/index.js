const itemsLoaded = (newItemList) => {
    return {
        type: 'FETCH_ITEMS_SUCCESS',
        payload: newItemList,

    };
};

const itemsRequested = () => {
    return {
        type: 'FETCH_ITEMS_REQUEST',
        loading: true,
    };
};

const itemsError = (error) => {
    return {
        type: 'FETCH_ITEMS_FAILURE',
        payload: error,
    };
};

const fetchItems = (dispatch, dataService) => () => {
    dispatch(itemsRequested());
    dataService.getItems()
        .then((data) => dispatch(itemsLoaded(data)))
        .catch((error) => dispatch(itemsError(error)));
};

const itemAddedToCart = (id) => {
    return {
        type: "ITEM_ADDED_TO_CART",
        payload: id
    }
};

const itemRemovedFromCart = (id) => {
    return {
        type: "ITEM_REMOVED_FROM_CART",
        payload: id,
    }
};
const allItemRemovedFromCart = (id) => {
    return {
        type: "ALL_ITEMS_REMOVED_FROM_CART",
        payload: id,
    }
};

export {
    fetchItems,
    itemAddedToCart,
    itemRemovedFromCart,
    allItemRemovedFromCart
};
