import React from "react";
import "./shopping-cart-table.css"

const ShoppingCartTable = ({item}) => {
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
                <tr>
                    <td>1</td>
                    <td>Item title value</td>
                    <td>1</td>
                    <td>200$</td>
                    <td>
                        <button className="btn btn-outline-success">
                            <i className="fa fa-plus-circle"/>
                        </button>
                        <button className="btn btn-outline-warning">
                            <i className="fa fa-minus-circle"/>
                        </button>
                        <button className="btn btn-outline-danger">
                            <i className="fa fa-trash-o"/>
                        </button>
                    </td>
                </tr>
                </tbody>
            </table>

            <div className="total-label">
                Total amount of order: 200$
            </div>
        </div>
    );
};


export default ShoppingCartTable;
