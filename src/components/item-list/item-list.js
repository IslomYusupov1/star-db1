import React  from "react";

import "./item-list.css"

 const ItemList = (props) => {

        const  { data, onItemSelected, children: renderLabel} = props;

        const items = data.map((item) => {
            const {id} = item;
            const label = renderLabel(item);

            return(
                 <li id="l" className="list-group-item"
                    key = {id}
                    onClick= {() => onItemSelected(id)}>
                    {label}
                 </li>

            )
        })

     return(
        <div className="it">
            <ul  className="list-item list-group">
                {items}
            </ul>
        </div>
    )
};


export  default ItemList;