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
        this.props.fetchItems();
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

const mapDispatchToProps = (dispatch, ownProps) => {
    const {dataService} = ownProps;
    return {
        fetchItems: () => {
            dispatch(actionItemsRequested());
            dataService.getItems()
                .then((data) => dispatch(actionItemsLoaded(data)))
                .catch((error) => dispatch(actionItemsError(error)));
        }
    }
};

export default compose(
    withDataService(),
    connect(mapStateToProps, mapDispatchToProps)
)(ItemList);
