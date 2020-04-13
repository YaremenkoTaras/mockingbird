const itemsLoaded = (newItemList) => {
    return {
        type: 'ITEMS_LOADED',
        payload: newItemList,

    };
};

const itemsRequested = () => {
    return {
        type: 'ITEMS_REQUESTED',
        loading: true,
    };
};

const itemsError = (error) => {
    return {
        type: 'ITEMS_ERROR',
        payload: error,
    };
};

export {
    itemsLoaded as actionItemsLoaded,
    itemsRequested as actionItemsRequested,
    itemsError as actionItemsError,
};
