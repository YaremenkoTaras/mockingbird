import React, {Component} from "react";
import './item-list.css'
import ItemDetails from "../item-details";
import {connect} from 'react-redux'
import {withDataService} from '../hoc'
import {fetchItems} from "../../actions";
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

const mapDispatchToProps = (dispatch, {dataService}) => {
    return {
        fetchItems: fetchItems(dispatch, dataService)
    }
};

export default compose(
    withDataService(),
    connect(mapStateToProps, mapDispatchToProps)
)(ItemList);
