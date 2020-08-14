import React from "react";
import ItemList from "../item-list/item-list";
import { withData }  from "../hoc-helper";
import SwapiService from "../../services/swapi-service";


const swapiService = new SwapiService()


const withChildFunction = (Wrapped, fn) => {
    return (props) => {
        return (
            <Wrapped {...props}>
                {fn}
            </Wrapped>
        )
    };
};

const {
    getAllPeople,
    getAllStarships,
    getAllPlanets
} = swapiService;

const renderName = ({ name }) => <span>{name}</span>;
const renderModelAndName = ({ model, name}) => <span>{name} ({model})</span>;


const PeopleList = withData
                    (withChildFunction(ItemList, renderName) ,
                    getAllPeople);
;
const StarshipList =withData
                    (withChildFunction(ItemList, renderName),
                        getAllStarships);

const PlanetList = withData
                    (withChildFunction(ItemList, renderModelAndName),
                        getAllPlanets);

export {
    PeopleList,
    StarshipList,
    PlanetList
};