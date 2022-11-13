import React from 'react'
import './Nav.css';
import { useState ,useEffect} from 'react';
import { Link } from 'react-router-dom';
export const Nav = () => {
const [show, setShow] = useState(false);
const transitionNav=()=>{
    if(window.scrollY > 100){
      setShow(true)
     
    }else{
      setShow(false)
    }
  }

  useEffect(() => {
   window.addEventListener('scroll',transitionNav);
   return()=>{
     window.removeEventListener('scroll',transitionNav);
 }  
  }, []);
  console.log(show);
  return (
    <nav className={`nav ${show && 'nav__black'}`}>
        <div className="nav__contents">
         <Link to='/'>
          <img src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          className='nav__logo' alt="" />
        </Link>
        
        <Link to='/profile'>
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAH0AAAB9CAMAAAC4XpwXAAAAYFBMVEUNfoD///8AenwAd3kAdHb4+/vB2trs9PQAcnWHt7iuzs+Xv8BtqKm51NSix8hioKGnxcYigIIsi43P4+PY6elPm5zI3d5EkpTj7++Js7R8qapzp6jQ3t45jI5Zmpt9sLJ8CaCJAAACIElEQVRoge2Y6ZKqMBCFQzpAWEJEUZhR9P3fcuK4BcelqWSm7q0631/tc9KdELoRAgAAAAAAAAAAAOAbOff/sl22cm7UYyk6ShFfS6p6lSZJV0XwV+uNkxqalrjm7So5kfeh9rI8S6U1015ezJ39GGZP5VUqtSwpqpIbGbdgD5HWkxpY7ir3QpJlSPJ640ttGVKy9yOSjxB3Sn2pUjHcPyfuVUjplxP3jWa423juYuKeMdyFmLhzNuspOp+diF55EXmAt9v3xndnXR6T0ocVXiy95DPGoXOo4hpheBFPoVsmHXcLqR6+A9Iq+J6nvjs/bi1bS7Zbs9sUgdfsSUrYcrer+lkvLNJazXgrvvRXWkeSAgAAAMC/hFRKx3rHzxnHT96jGTob1qFeIFvs53wOoL7kt9Rv1cyx2+0VT4ukzc4jTRkheVmfGt7F+L5TlNQeult/HsH9+kUgzax6UQBJiqzxJ7lDhMrTx00vNVuh1Y8aSOesx2Iyvbu5KHA0OdP5mmm3qPctaaXoyLF9Fr2tTD61TssxzpGXokzvpPOhM01VFEXVmN2Q3/3shtGGcUi4qLW513/FUC2ZDwgPd300PxJ8grEUfZSRpOvs7QJyY3XUtL0FyLY2w9MV5KtyLeLt9qMFULveNt3dOXOHcFPYUfzB7CjdjCrGfX0omsVi0RRFbXv3ANKvZn2/BEkX5B/6AgAAAAAAAAAAAAAAAPhv+QJ9ExHaFMUQOgAAAABJRU5ErkJggg==" alt="" 
          className='nav__avatar'/>
        </Link>
        </div>

    </nav>
  )
}
