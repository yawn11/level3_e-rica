import React from 'react'
import { useLocation } from 'react-router-dom';
import { IMG_c_0, IMG_c_1 } from '../components/Captain';

export default function CaptainDetail() {
    const {state} = useLocation();

    return (
        <div className='page-container'>
            <div style={{display: 'flex'}}>
                <img 
                    style={{ width: "300px", height: "450px" }}
                    src={IMG_c_0 + state.poster_path + IMG_c_1}
                    alt='영화 포스터 이미지'
                />
                <div>
                    <div style={{ fontSize: "32px" }}>{state.title}</div>
                    <br />
                    <div style={{ fontSize: "20px" }}>{state.overview}</div>
                </div>
            </div>
        </div>
    )
}