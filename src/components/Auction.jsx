import React from 'react'
import Team from './Team'

export default function Auction() {
  return (
    <div className='auction-container'>
        <div className='team-above'>
            <div className='team1-container'>
                <Team />
            </div>
        </div>
        <div className='auction-board'></div>
        <div className='team-bottom'>
            <div className='team2-container'>
                <Team />
            </div>
            <div className='team3-container'>
                <Team />
            </div>
        </div>
        
    </div>
  )
}
