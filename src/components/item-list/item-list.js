import React, {Component} from "react";
import './item-list.css'
import ItemDetails from "../item-details";
import {connect} from 'react-redux'
import {withDataService} from '../hoc'
import {actionItemsLoaded} from "../../actions";
import compose from "../../utils";

class ItemList extends Component {

    componentDidMount() {
        const {dataService} = this.props;
        const data = dataService.getMovies();
        this.props.actionItemsLoaded(data);
    }

    render() {
        const {itemList} = this.props;
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
    }
}

const mapStateToProps = ({itemList}) => {
    return {itemList}
};


export default compose(
    withDataService(),
    connect(mapStateToProps, {actionItemsLoaded})
)(ItemList);
