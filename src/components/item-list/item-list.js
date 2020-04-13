import React, {Component} from "react";
import './item-list.css'
import ItemDetails from "../item-details";
import {connect} from 'react-redux'
import {withDataService} from '../hoc'
import {actionItemsLoaded} from "../../actions";
import compose from "../../utils";
import Spinner from "../spinner";

class ItemList extends Component {

    componentDidMount() {
        const {dataService} = this.props;
        dataService.getItems()
            .then((data) => this.props.actionItemsLoaded(data));
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
    connect(mapStateToProps, {actionItemsLoaded})
)(ItemList);
