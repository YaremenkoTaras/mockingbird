import React from "react";
import './item-list.css'
import ItemDetails from "../item-details";

const ItemList = ({items, onAddToCart}) => {
    return (
        <ul className='item-list'>
            {
                items.map((item) => {
                    return (
                        <li key={item.id}>
                            <ItemDetails item={item}
                                         onAddToCart={() => onAddToCart(item.id)}/>
                        </li>
                    );
                })
            }
        </ul>
    );
};

export default ItemList
