import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {fetchUsers} from "./userSlice.js";

export default function UserView() {
    const dispatch = useDispatch()
    const user = useSelector(state => state.user)

    React.useEffect(() => {
        dispatch(fetchUsers())
    }, [])

    return(
        <div>
            <h2>List of Users</h2>
            {user.loading && <div>Loading...</div>}
            {!user.loading && user.error ?
                <div>Error: {user.error}</div>
                :
                null
            }
            {!user.loading && user.users.length > 0 ?
                <ul> {user.users.map(user => <li key={user.id}>{user.name}</li>)} </ul>
                :
                null
            }
        </div>
    )
}