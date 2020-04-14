import React from "react";
import "./shopping-cart-table.css"
import compose from "../../utils";
import {connect} from "react-redux";

const ShoppingCartTable = ({
                               itemList, total,
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
                    itemList.map(renderRow)
                }
                </tbody>
            </table>

            <div className="total-label">
                Total amount of order: ${total}
            </div>
        </div>
    );
};

const mapStateToProps = ({cartItemList, orderTotal}) => {
    return {
        itemList: cartItemList,
        total: orderTotal,
    };
};

const mapDispatchToProps = () => {
    return {
        onIncrease: (id) => {
            console.log(`Increasing ${id}`)
        },
        onDecrease: (id) => {
            console.log(`Decreasing ${id}`)
        },
        onDelete: (id) => {
            console.log(`Deleting ${id}`)
        },
    };
};

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
)
(ShoppingCartTable);
