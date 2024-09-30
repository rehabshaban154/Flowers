import React from 'react'
import why from '../../Assets/why.jpg';
import './discription.css'
export default function Discription() {
  return (
   <div className='why'>
   <div className='content'>
    <h2 style={{color:'#E91E63',textAlign:'left'}}>Rose Flowers 🌸</h2>
    <p style={{fontSize:'24px'}}>Do you want to say thank you, congratulations or I love you to someone? You can send flowers  to express your love and best wishes. Put simply, 
        a flower bouquet is the best way to do this! Delivery within 90 Minutes! 😉</p>
   </div>
   <img src={why} />
   </div>
  )
}
