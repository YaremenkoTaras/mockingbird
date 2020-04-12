import React, {Component} from "react";
import './list.css'
import ListItem from "../list-item";
import {connect} from 'react-redux'

class List extends Component {
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
}

const mapStateToProps = ({itemList}) => {
    return {itemList}
};

export default connect(mapStateToProps)(List);
