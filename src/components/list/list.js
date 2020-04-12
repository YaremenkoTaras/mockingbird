import React, {Component} from "react";
import './list.css'
import ListItem from "../list-item";
import {connect} from 'react-redux'
import {withDataService} from '../hoc'
import {actionItemsLoaded} from "../../actions";
import compose from "../../utils";

class List extends Component {

    componentDidMount() {
        const {dataService} = this.props;
        const data = dataService.getMovies();
        this.props.actionItemsLoaded(data);
    }

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


export default compose(
    withDataService(),
    connect(mapStateToProps, {actionItemsLoaded})
)(List);
