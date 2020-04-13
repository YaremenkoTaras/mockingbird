import React from "react";
import './item-details.css'

const ItemDetails = ({item}) => {
    const {title, genre, author, image, price} = item;
    return (
        <div className="item-details">
            <div className="item-cover">
                <img src={image} alt="cover"/>
            </div>

            <div className="item-info">
                <a href="#" className="item-title">{title}</a>
                <div className="item-genre">{genre}</div>
                <div className="item-author">{author}</div>
                <div className="item-price">{price}</div>
                <button className="btn btn-info add-to-cart">Add t cart</button>
            </div>
        </div>
    );
};

export default ItemDetails;

