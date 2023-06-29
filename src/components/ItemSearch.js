import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeSearchTerm } from '../store';

const ItemSearch = () => {

    const dispatch = useDispatch();

    const handleSearchTermChange = (event) => {
        dispatch(changeSearchTerm(event.target.value));
    };

    const searchTerm = useSelector((state) => {
        return state.search.searchTerm;
    });

    return (
        <div className='list-header'>
            <h3 className='title is-4'>My Shopping List</h3>
            <div className='search field is-horizontal'>
                <label className='label'></label>
                <input className='input' value={searchTerm} onChange={handleSearchTermChange} />
            </div>
        </div>
    )
}

export default ItemSearch;