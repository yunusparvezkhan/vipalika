import React from 'react';
import { useSelector } from 'react-redux';

const ItemList = () => {

    const items = useSelector((state) => {
        return state.items;
    })

    const renderItems = items.map((item, i) => {
        return (
            <div key={item.id}>
                <label><b>{i + 1}. </b></label>
                <br></br>
                <label>{item.name} - </label>
                <label>₹{item.cost}</label>
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