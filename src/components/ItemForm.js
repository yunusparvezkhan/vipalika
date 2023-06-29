import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addName, addCost, addItem } from '../store';

const ItemForm = () => {

    const [reloader, setReloader] = useState(false)
    const dispatch = useDispatch();

    const { name, cost } = useSelector((state) => {
        return state.form;
    })

    const items = useSelector((state) => {
        return state.items;
    })

    const handleNameChange = (event) => {
        dispatch(addName(event.target.value));
    }

    const handleCostChange = (event) => {
        dispatch(addCost(parseInt(event.target.value) || 0));
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        if (name !== null && name.trim().length !== 0) {

            dispatch(addItem({ name, cost }));

            // This was how name and cost input was reset before this commit
            // --------------------------------------------------------------//
            // dispatch(addName(''));                                       //
            // dispatch(addCost(0));                                       //
            // -----------------------------------------------------------//

        } else {
            setReloader(!reloader)
        }
    }

    // Auto focuses the name input after submit
    const inputReference = useRef();
    useEffect(() => {
        inputReference.current.focus();
    }, [items, reloader])

    return (
        <div className='item-form panel'>
            <h3 className='subtitle is-3'>Add Item</h3>
            <form onSubmit={handleSubmit}>
                <div className='field-group'>
                    <div className='field'>
                        <label className='label'> Name </label>
                        <input className='input is-expanded' ref={inputReference} value={name} onChange={handleNameChange} />
                    </div>

                    <div className='field'>
                        <label className='label'>Cost ₹ </label>
                        <input type='number' className='input is-expanded' placeholder='0' value={cost || ''} onChange={handleCostChange} />
                    </div>

                    <div className='field'>
                        <button className='button is-link'  >Submit</button>
                    </div>
                </div>
            </form>
        </div >
    )
}

export default ItemForm;