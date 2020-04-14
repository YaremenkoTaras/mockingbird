import React, {Component} from "react";
import Spinner from "../../components/spinner";
import ErrorIndicator from "../../components/error-indicator";
import {fetchItems, itemAddedToCart} from "../../actions";
import compose from "../../utils";
import {withDataService} from "../../components/hoc";
import {connect} from "react-redux";
import ItemList from "../../components/item-list";

class ItemListContainer extends Component {

    componentDidMount() {
        this.props.fetchItems();
    }

    render() {
        const {itemList, loading, error, onAddToCart} = this.props;

        if (loading) {
            return <Spinner/>;
        }
        if (error) {
            return <ErrorIndicator/>;
        }

        return <ItemList itemList={itemList} onAddToCart={onAddToCart}/>
    }
}

const mapStateToProps = ({itemList, loading, error}) => {
    return {itemList, loading, error}
};

const mapDispatchToProps = (dispatch, {dataService}) => {
    return {
        fetchItems: fetchItems(dispatch, dataService),
        onAddToCart: (id) => dispatch(itemAddedToCart(id)),

    };
};

export default compose(
    withDataService(),
    connect(mapStateToProps, mapDispatchToProps)
)(ItemListContainer);
