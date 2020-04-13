import React from "react";
import "./shop-header.css"

const ShopHeader = ({itemsNum, total}) => {
    return (
        <header className="shop-header">
            <a className="logo text-dark">Mockingbird</a>
            <a className="shopping-cart">
                <i className="cart-icon fa fa-shopping-cart"/>
                {itemsNum} items (${total})
            </a>
        </header>
    );
};


export default ShopHeader;
