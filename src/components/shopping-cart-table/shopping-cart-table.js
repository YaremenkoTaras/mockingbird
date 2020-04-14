import React from "react";
import "./shopping-cart-table.css"
import compose from "../../utils";
import {connect} from "react-redux";
import {allItemRemovedFromCart, itemAddedToCart, itemRemovedFromCart} from "../../actions";

const ShoppingCartTable = ({
                               cartItems, orderTotal,
                               onIncrease,
                               onDecrease,
                               onDelete,
                           }) => {

    const renderRow = (item, index) => {
        const {id, title, count, price} = item;
        return (
            <tr key={id}>
                <td>{index + 1}</td>
                <td>{title}</td>
                <td>{count}</td>
                <td>${count * price}</td>
                <td>
                    <button className="btn btn-outline-success"
                            onClick={() => onIncrease(id)}>
                        <i className="fa fa-plus-circle"/>
                    </button>
                    <button className="btn btn-outline-warning"
                            onClick={() => onDecrease(id)}>
                        <i className="fa fa-minus-circle"/>
                    </button>
                    <button className="btn btn-outline-danger"
                            onClick={() => onDelete(id)}>
                        <i className="fa fa-trash-o"/>
                    </button>
                </td>
            </tr>
        );
    };

    return (
        <div className="shopping-cart-table">
            <h2 className="shopping-cart-header">Your order</h2>
            <table className="table">
                <thead>
                <tr>
                    <th>#</th>
                    <th>Item</th>
                    <th>Count</th>
                    <th>Price</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                {
                    cartItems.map(renderRow)
                }
                </tbody>
            </table>

            <div className="total-label">
                Total amount of order: ${orderTotal}
            </div>
        </div>
    );
};

const mapStateToProps = ({shoppingCart: {cartItems, orderTotal}}) => {
    return {cartItems, orderTotal};
};

const mapDispatchToProps = {
    onIncrease: itemAddedToCart,
    onDecrease: itemRemovedFromCart,
    onDelete: allItemRemovedFromCart,
};

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
)
(ShoppingCartTable);
