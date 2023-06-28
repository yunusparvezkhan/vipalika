import React from 'react';
import { useSelector } from 'react-redux';

const ItemList = () => {

    const items = useSelector((state) => {
        return state.items;
    })

    const renderItems = items.map((item, i) => {
        return (
            <div>
                <label><b>{i + 1}. </b></label>
                <br></br>
                <label>Name: {item.name}</label>
                <br></br>
                <label>Cost: ₹{item.cost}</label>
                <br></br>
                <br></br>
            </div>
        )
    })


    return (
        <div>
            {renderItems}
        </div>
    )
}

export default ItemList;