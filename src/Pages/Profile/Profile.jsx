import { signOut } from 'firebase/auth';
import React from 'react'
import { useSelector } from 'react-redux'
import { Nav } from '../../components/Nav/Nav'
import {selectUser } from '../../features/UserSlice'
import {auth} from '../../firebase';

import './Profile.css'

export const Profile = () => {
  const user=useSelector(selectUser);

  const logout=()=>{
   signOut(auth)
  }
  return (
    <div className="profile">
      <Nav/>
      <div className="profile__body">
        <h1>Edit Profile</h1>
        <div className="profile__info">
          <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="" />

        <div className="profile__details">
          <h2>{user.email}</h2>
          <div className="profile__plans">
            {/* <h3>Plans</h3> */}
            <button className="profile__signout" onClick={logout}>Signout</button>
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}
