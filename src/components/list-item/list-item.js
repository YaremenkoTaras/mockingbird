import React, {Fragment} from "react";
import './list-item.css'

const ListItem = ({item}) => {
    const {title, genre} = item;
    return (
        <Fragment>
            <span>{title}</span>
            <span>{genre}</span>
        </Fragment>
    );
};

export default ListItem;

