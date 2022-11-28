import React
//,{useState}
    from 'react';
import {useDispatch, useSelector} from "react-redux";
import { clearInputAction } from '../../redux/actions';
import { types } from './../../redux/type';
function UsersPage() {

    const dispatch = useDispatch()
    const name = useSelector(state => state.name)

    const changeInput =(event) =>{
        dispatch({
            type: types.CHANGE_NAME,
            payload: event.target.value
        })
    }

    const addUser = () => {
        dispatch({
            type: types.ADD_USER,
            payload: name
        })
    }

    const clearInput = () => {
        dispatch(clearInputAction())
    }

    const deleteAll = () => {
        dispatch({
            type: types.DELETE_ALL,
        })
    }

    return (
        <div>
            <input type="text" placeholder="name" onChange={changeInput} value={name}/>
            <button onClick={addUser}>add</button>
            <button onClick={clearInput}>clear</button>
            <button onClick={deleteAll}>delete all</button>
            <UsersList/>
        </div>
    );
}

export default UsersPage;