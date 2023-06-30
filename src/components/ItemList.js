import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem } from '../store';
import './styles/stylelib.css';

const ItemList = () => {

    const dispatch = useDispatch();
    let totalCost = 0;

    const items = useSelector((state) => {
        return state.items.filter((item) => {
            return item.name.toLowerCase().includes(state.search.searchTerm.toLowerCase())
        });
    })

    const handleRemove = (id) => {
        dispatch(removeItem(id));
    }

    const renderItems = items.map((item, i) => {

        totalCost = totalCost + item.cost;

        return (
            <div key={item.id} className='panel item-box' >
                <div className='item-container' >
                    <div className='item-text-box'>
                        <label className='item-text' ><b>{i + 1}. </b> {item.name} - ₹{item.cost}</label>
                    </div>
                    <div className='item-btn-box'>
                        <button onClick={() => handleRemove(item.id)} className='button is-danger item-remove-btn' >Remove</button>
                    </div>
                </div>
            </div>
        )
    })


    return (
        <div>
            {renderItems}
            <hr />
            <label><b>Total Cost :-</b></label>
            <label> ₹{totalCost}</label>
        </div>
    )
}

export default ItemList;