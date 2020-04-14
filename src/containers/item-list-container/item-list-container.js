import React, {Component} from "react";
import Spinner from "../../components/spinner";
import ErrorIndicator from "../../components/error-indicator";
import {fetchItems} from "../../actions";
import compose from "../../utils";
import {withDataService} from "../../components/hoc";
import {connect} from "react-redux";
import ItemList from "../../components/item-list";

class ItemListContainer extends Component {

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

        return <ItemList itemList={itemList}/>
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
)(ItemListContainer);
