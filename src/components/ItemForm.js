import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { name, addName } from '../store';

const ItemForm = () => {

    const dispatch = useDispatch();

    const name = useSelector((state) => {
        return state.form.name;
    })

    const handleNameChange = (event) => {
        dispatch(addName(event.target.value));
    }

    return (
        <div className='item-form panel'>
            <h3 className='subtitle is-3'>Add Item</h3>
            <div className='field-group'>
                <div className='field'>
                    <label className='label'>Name</label>
                    <input className='input is-expanded' value={name} onChange={handleNameChange} />
                </div>

            </div>
        </div>
    )
}

export default ItemForm;