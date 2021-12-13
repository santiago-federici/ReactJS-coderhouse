import React from 'react'
import Categories from "./Categories";
import ItemList from "./ItemList"
import "./ItemListContainer.css"

export default function ItemListContainer (){

    return (
        <div className="itemListContainer">
            <Categories />



            <ItemList />
        </div>
    )
}

