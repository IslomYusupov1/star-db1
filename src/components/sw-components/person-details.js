import React from 'react';
import ItemDetails from '../item-details';
import  {Record} from "../item-details/item-details";
import {SwapiServiceConsumer} from "../swapi-service-context";

const PersonDetails = ({itemId}) => {
    return (
        <SwapiServiceConsumer>
            {
                ({getPerson, getPersonImage}) => {
                    return (
                        <ItemDetails
                            itemId={itemId}
                            getData={getPerson}
                            getImageUrl={getPersonImage}>

                            <Record field="model" label="Model"/>
                            <Record field="length" label="Length"/>
                            <Record field="costInCredits" label="Cost"/>

                        </ItemDetails>
                    )
                }
            }
        </SwapiServiceConsumer>
    )
};
export default PersonDetails;
