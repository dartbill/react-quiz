import React from 'react'
import './Logo.css'

export default function Logo() {
  return (
    <div className='logo-Container'>
      <img className='logo-Image' alt='logo' src={require('../../Images/logoNoText.png')} />
      <h3 id='logo-Name'>Quiz-Nado</h3>
      <p id='logo-Slogan'>Nuff Said</p>
    </div>
  )
}
