import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem } from '../store';

const ItemList = () => {

    const dispatch = useDispatch();

    const items = useSelector((state) => {
        return state.items;
    })

    const handleRemove = (id) => {
        dispatch(removeItem(id));
    }

    const renderItems = items.map((item, i) => {
        return (
            <div key={item.id}>
                <label><b>{i + 1}. </b></label>
                <br></br>
                <label>{item.name} - </label>
                <label>₹{item.cost}</label>
                <button onClick={() => handleRemove(item.id)} >Remove</button>
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