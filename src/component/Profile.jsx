import React,{useContext} from 'react'
import UserContext from '../context/UserContext'

function Profile() {
    const {user} = useContext(UserContext)

    if (!user) {
        return <div style={{color: 'white'}}>please login</div>
    }

    return <div style={{color: 'white'}}>welcome {user.username}</div>
}

export default Profile