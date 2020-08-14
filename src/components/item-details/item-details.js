import React, {Component} from 'react';

import './item-details.css';
import SwapiService from "../../services/swapi-service";
import Spinner from "../spinner";
import ErrorButton from "../error-button";

const Record = ({item, field, label}) => {
    return(
        <li className="list-group-item">
            <span className="term">{label}</span>
            <span>{item[field]}</span>
        </li>
    )
}
export {
    Record
}



export default class ItemDetails extends Component {

    swapiService = new SwapiService();

    state = {
        item: null,
        loading: true,
        image: null
    };


    componentDidMount() {
        this.updatePerson();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.itemId !== prevProps.itemId) {
            return this.updatePerson();
        }
    }


    updatePerson() {
        const {itemId, getData, getImageUrl} = this.props;
        if (!itemId) {
            return;
        }

        getData(itemId)
            .then((item) =>
        this.setState({
            item,
            loading: false,
            image: getImageUrl(item)
        })
     )
    }

    render() {

        const {item, image, loading} =this.state;

        if (!item) {
            return <span>Select a person from a list</span>;
        }
        const {name} = item;

        if (loading) {
            return <Spinner/>
        }

        return (
            <div id="per" className="person-details card">
                <img className="person-image"
                     src={image}
                />

                <div className="card-body">
                    <h4>{name} </h4>
                    <ul className="list-group list-group-flush">
                        {
                            React.Children.map(this.props.children, (child) => {
                                return React.cloneElement(child, { item });
                            })
                        }
                    </ul>
                </div>
                <div className="btn1">
                    <ErrorButton/>
                </div>
            </div>
        );
    }
}
