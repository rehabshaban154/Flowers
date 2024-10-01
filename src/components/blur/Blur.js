import React from 'react'
import img from '../../Assets/blur2.png';
import { Link } from 'react-router-dom';
import './blur.css'
export default function Blur() {
  return (
    <div className='blur'>
      <img src={img} />
      <div className='content'>
      <p style={{textAlign:'center'}}>We provide a special place where you can buy beautiful flowers online! You can send flowers to Any place for any special occasion, like a birthday, anniversary, or just to say “I love you.” We have many different types of flowers, like roses, daisies, and sunflowers. You can even choose the colors you want and have them delivered right to your doorstep. 
        Online florists in Hurghada are a convenient and easy way to bring a little happiness into someone’s day.</p>
      <div className='data' >
        <h2>Shop Flowers For <br/> All Occasions Now !</h2>
        <p>Take a look at our flower arrangements <br/> and choose which ones you like.</p>
        <Link to='/occasion' style={{
    /* margin-top: 10px; */
    position:'relative',
    top:'30px',backgroundColor:'#E91E63',transition:'0.5s'}} className='link'>Choose your occasion 🤭</Link>
      </div>
      </div>
    </div>
  )
}
