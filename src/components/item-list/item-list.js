import React, {Component} from "react";
import './item-list.css'
import ItemDetails from "../item-details";
import {connect} from 'react-redux'
import {withDataService} from '../hoc'
import {actionItemsError, actionItemsLoaded, actionItemsRequested} from "../../actions";
import compose from "../../utils";
import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";

class ItemList extends Component {

    componentDidMount() {
        const {dataService, actionItemsLoaded, actionItemsRequested, actionItemsError} = this.props;

        actionItemsRequested();
        dataService.getItems()
            .then((data) => actionItemsLoaded(data))
            .catch((error) => actionItemsError(error));
    }

    render() {
        const {itemList, loading, error} = this.props;

        if (loading) {
            return <Spinner/>;
        }
        if (error) {
            return <ErrorIndicator/>;
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

const mapStateToProps = ({itemList, loading, error}) => {
    return {itemList, loading, error}
};


export default compose(
    withDataService(),
    connect(mapStateToProps, {actionItemsLoaded, actionItemsRequested, actionItemsError})
)(ItemList);
