const itemsLoaded = (newItemList) => {
    return {
        type: 'ITEMS_LOADED',
        payload: newItemList,

    };
};

export {
    itemsLoaded as actionItemsLoaded,

};
