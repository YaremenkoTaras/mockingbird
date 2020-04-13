import React, {Component} from "react";
import './item-list.css'
import ItemDetails from "../item-details";
import {connect} from 'react-redux'
import {withDataService} from '../hoc'
import {actionItemsLoaded, actionItemsRequested} from "../../actions";
import compose from "../../utils";
import Spinner from "../spinner";

class ItemList extends Component {

    componentDidMount() {
        const {dataService, actionItemsLoaded, actionItemsRequested} = this.props;
        actionItemsRequested();
        dataService.getItems()
            .then((data) => actionItemsLoaded(data));
    }

    render() {
        const {itemList, loading} = this.props;
        if (loading) {
            return <Spinner/>
        }
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

const mapStateToProps = ({itemList, loading}) => {
    return {itemList, loading}
};


export default compose(
    withDataService(),
    connect(mapStateToProps, {actionItemsLoaded, actionItemsRequested})
)(ItemList);
