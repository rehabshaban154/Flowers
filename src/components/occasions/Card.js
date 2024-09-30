import React from 'react'

export default function Card(props) {
  return (
   <div className='item'>
 <img src={props.image}/>
 <h2>{props.title}</h2>
   </div>
  )
}
