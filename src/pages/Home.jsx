import React from 'react'
import image from '../images/main.png';

export default function Home() {
  return (
    <div style={{display: 'flex', justifyContent: 'center'}}>
        <img src={image} style={{width: '50%'}} />
    </div>
  )
}
