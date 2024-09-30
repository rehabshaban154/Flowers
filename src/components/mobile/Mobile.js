import React from 'react'
import logo from '../../Assets/logo-removebg-preview.png'
import mobile from '../../Assets/mobile.jpg';
import app from '../../Assets/app.png'
import play from '../../Assets/google.jpg'
import './mobile.css'
export default function Mobile() {
  return (
    <div className='mobile' style={{marginTop:'70px'}}>
        <div className='container'>
        <div className='download'>
   <h2>
    <img src={logo} style={{width:'300px'}}/>
    <h3>Download Our App <br/>and get All Our Benifits</h3>
    <a href='' style={{backgroundColor:'var(--alt)'}}>Download Now</a>
    <div className='store'>
        <img src={app} />
        <img src={play} />
    </div>
    </h2>
   </div>
   <img src={mobile} style={{ transform:" skewX(-12deg)",
    width: '248px'}}/>
        </div>
  
    </div>
  )
}
