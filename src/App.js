import React from 'react';
import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import { Home } from './Pages/Home/Home';
import { Profile } from './Pages/Profile/Profile';
import { Login } from './Pages/Login/Login';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/UserSlice';
import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';

function App() {
  const user=useSelector(selectUser);
  console.log(user);
  const dispatch=useDispatch();

  useEffect(() => {
  const unsunscribe=onAuthStateChanged(auth,(userAuth)=>{
    console.log(userAuth);
    if(userAuth){
      dispatch(login({
        uid:userAuth.uid,
        email:userAuth.email
      }))
    }else{
      dispatch(logout());
    }
  });
  return unsunscribe;
  }, []);
  return (
    <div className="App">
  <Router>
{
  !user? (
    <Login />
    )
  :
  (<Routes>
      <Route path='/profile' element={<Profile />}/>
      <Route path='/' element={<Home />}/>
  </Routes>
)}
  </Router>
    </div>
  );
}

export default App;
