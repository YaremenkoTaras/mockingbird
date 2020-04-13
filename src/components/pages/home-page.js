import React from "react";
import ItemList from "../item-list";
import ShoppingCartTable from "../shopping-cart-table";

const HomePage = () => {
    return (
        <div>
            <ShoppingCartTable/>
            <ItemList/>
        </div>
    );
};

export default HomePage;

