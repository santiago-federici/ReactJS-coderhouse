import React from 'react'
import ItemList from "./ItemList"
import Categories from "./Categories";
import "./ItemListContainer.css"

export default function ItemListContainer (){

    return (
        <div className="itemListContainer">
            <Categories />
            <ItemList />
        </div>
    )
}

