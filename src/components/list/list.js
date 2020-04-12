import React, {Component} from "react";
import './list.css'
import ListItem from "../list-item";

export default class List extends Component {

    render() {
        const {itemList} = this.props;
        return (
            <ul>
                {
                    itemList.map((item) => {
                        return (
                            <li key={item.id}><ListItem item={item}/></li>
                        );
                    })
                }
            </ul>
        );
    }

};
