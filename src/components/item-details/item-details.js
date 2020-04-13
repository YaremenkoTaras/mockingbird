import React, {Fragment} from "react";
import './item-details.css'

const ItemDetails = ({item}) => {
    const {title, genre} = item;
    return (
        <Fragment>
            <span>{title}</span>
            <span>{genre}</span>
        </Fragment>
    );
};

export default ItemDetails;

