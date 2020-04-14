const updateShoppingCart = (state, action) => {

    if (!state) {
        return {
            cartItems: [],
            orderTotal: 0,
        };
    }

    switch (action.type) {
        case 'ITEM_ADDED_TO_CART':
            return updateOrder(state, action.payload, 1);

        case 'ITEM_REMOVED_FROM_CART':
            return updateOrder(state, action.payload, -1);
        case 'ALL_ITEMS_REMOVED_FROM_CART':
            const {shoppingCart: {cartItems}} = state;
            let item = cartItems.find(({id}) => id === action.payload);
            return updateOrder(state, action.payload, -item.count);

        default:
            return state.shoppingCart;
    }
};

const updateOrder = (state, id, quantity) => {
    const {shoppingCart: {cartItems}, itemList: {items}} = state;
    const itemToAdd = items.find((item) => item.id === id);
    const cartItem = cartItems.find((item) => item.id === id);
    const cartItemsUpdated = updateCartItems(cartItems, updateCartItem(itemToAdd, cartItem, quantity));
    const total = cartItemsUpdated.reduce((sum, {count, price}) => sum + count * price, 0)
    return {
        orderTotal: total,
        cartItems: cartItemsUpdated,
    };
};

const updateCartItems = (cartItems, item) => {
    const idx = cartItems.findIndex(({id}) => id === item.id);
    if (item.count === 0) {
        return [...cartItems.slice(0, idx), ...cartItems.slice(idx + 1)]
    } else if (idx === -1) {
        return [...cartItems, item];
    } else {
        return [...cartItems.slice(0, idx), item, ...cartItems.slice(idx + 1)];
    }
};

const updateCartItem = (item, cartItem = {}, quantity) => {
    const {id = item.id, title = item.title, price = item.price, count = 0} = cartItem;
    return {id, title, count: count + quantity, price};
};

export default updateShoppingCart;
