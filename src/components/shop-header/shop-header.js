import React from "react";
import "./shop-header.css"
import {Link} from "react-router-dom";
import {connect} from "react-redux";

const ShopHeader = ({itemsNum, orderTotal}) => {
    return (
        <header className="shop-header">
            <Link to="/">
                <div className="logo text-dark">Mockingbird</div>
            </Link>
            <Link to="/cart">
                <div className="shopping-cart">
                    <i className="cart-icon fa fa-shopping-cart"/>
                    {itemsNum} items (${orderTotal})
                </div>
            </Link>
        </header>
    );
};

const mapStateToProps = ({shoppingCart: {orderTotal, cartItems}}) => {
    let itemsNum = cartItems.reduce((sum, {count}) => sum + count, 0);
    return {orderTotal, itemsNum}
};

export default connect(mapStateToProps)(ShopHeader);
