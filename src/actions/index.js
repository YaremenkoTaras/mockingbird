const itemsLoaded = (newItemList) => {
    return {
        type: 'ITEMS_LOADED',
        payload: newItemList,

    };
};

const itemsRequested = () => {
    return {
        type: 'ITEMS_REQUESTED',
    };
};

export {
    itemsLoaded as actionItemsLoaded,
    itemsRequested as actionItemsRequested,

};
