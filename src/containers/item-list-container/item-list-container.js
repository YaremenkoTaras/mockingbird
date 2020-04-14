import React, {Component} from "react";
import Spinner from "../../components/spinner";
import ErrorIndicator from "../../components/error-indicator";
import {fetchItems, itemAddedToCart} from "../../actions";
import compose from "../../utils";
import {withDataService} from "../../components/hoc";
import {connect} from "react-redux";
import ItemList from "../../components/item-list";
import {bindActionCreators} from "redux";

class ItemListContainer extends Component {

    componentDidMount() {
        this.props.fetchItems();
    }

    render() {
        const {items, loading, error, onAddToCart} = this.props;

        if (loading) {
            return <Spinner/>;
        }
        if (error) {
            return <ErrorIndicator/>;
        }

        return <ItemList items={items} onAddToCart={onAddToCart}/>
    }
}

const mapStateToProps = ({itemList: {items, loading, error}}) => {
    return {items, loading, error}
};

const mapDispatchToProps = (dispatch, {dataService}) => {
    return bindActionCreators({
        fetchItems: fetchItems(dataService),
        onAddToCart: itemAddedToCart,
    }, dispatch);
};

export default compose(
    withDataService(),
    connect(mapStateToProps, mapDispatchToProps)
)(ItemListContainer);
