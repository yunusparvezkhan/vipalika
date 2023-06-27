import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { name, addName, addCost } from '../store';

const ItemForm = () => {

    const dispatch = useDispatch();

    const { name, cost } = useSelector((state) => {
        return state.form;
    })

    const handleNameChange = (event) => {
        dispatch(addName(event.target.value));
    }

    const handleCostChange = (event) => {
        dispatch(addCost(parseInt(event.target.value) || 0));
    }

    return (
        <div className='item-form panel'>
            <h3 className='subtitle is-3'>Add Item</h3>
            <div className='field-group'>

                <div className='field'>
                    <label className='label'> Name </label>
                    <input className='input is-expanded' value={name} onChange={handleNameChange} />
                </div>

                <div className='field'>
                    <label className='label'>Cost ₹ </label>
                    <input type='number' className='input is-expanded' value={cost} onChange={handleCostChange} />
                </div>

            </div>
        </div>
    )
}

export default ItemForm;