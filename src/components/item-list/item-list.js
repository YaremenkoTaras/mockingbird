import React from "react";
import './item-list.css'
import ItemDetails from "../item-details";

const ItemList = ({itemList}) => {
    return (
        <ul className='item-list'>
            {
                itemList.map((item) => {
                    return (
                        <li key={item.id}><ItemDetails item={item}/></li>
                    );
                })
            }
        </ul>
    );
};

export default ItemList
