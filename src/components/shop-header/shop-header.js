import React from "react";
import "./shop-header.css"
import {Link} from "react-router-dom";

const ShopHeader = ({itemsNum, total}) => {
    return (
        <header className="shop-header">
            <Link to="/">
                <div className="logo text-dark">Mockingbird</div>
            </Link>
            <Link to="/cart">
                <div className="shopping-cart">
                    <i className="cart-icon fa fa-shopping-cart"/>
                    {itemsNum} items (${total})
                </div>
            </Link>
        </header>
    );
};


export default ShopHeader;
