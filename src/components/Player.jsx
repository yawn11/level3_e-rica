import React from 'react';
import { useNavigate } from 'react-router-dom';

export const IMG_c_0 = "https://cdn.lol.ps/assets/img/champion-portraits/";
export const IMG_c_1 = "_60.webp";

export const IMG_p_0 = "https://s-lol-web.op.gg/images/icon/icon-position-";
export const IMG_p_1 = "-wh.svg";

export const IMG_t_0 = "https://opgg-static.akamaized.net/images/medals_new/";
export const IMG_t_1 = ".png?image=q_auto,f_webp,w_144&amp;v=1702977255104";

export const IMG_t_v_0 = "https://s-valorant-api.op.gg/Tiers/Icons/";
export const IMG_t_v_1 = ".svg?image=q_auto,f_webp,w_120,h_120&v=9187748864";
export const 언랭 = "https://trackercdn.com/cdn/tracker.gg/valorant/icons/tiersv2/0.png"

export const 타격대 = "//i.namu.wiki/i/X08Y5vPKwd4zBQ76rSquNiFmrvl27JJ953ryqtEGNDzBSzYgF2KyRRB8A6hP7Qm2IwwGOooUFfmmwX1FKi2pHg.webp";
export const 척후대 = "//i.namu.wiki/i/DoB3XwA-liC2Cb_zhco3nBKIN_2L5O38IoZJU2_ewGunN-nGiIix3MbRn4jhn_FG5vmPKoR3T_5zdmmO0PSc2g.webp";
export const 감시자 = "//i.namu.wiki/i/242yYPS-dD2hPmTYlNeiuYBIJr2Khl4m4BbDC3_HAciHtt7EfZm17gqJdCpSdJjgtB3b6NMt10Jvz1cob4p60A.webp";
export const 전략가 = "//i.namu.wiki/i/gJh6Fmf95bpRUVvWvQL7lAz2qkK-Q4SCUVvcZDt5wZz7jGfteUpV_ukOFGW5iW4erUrzJsuBT69B1WGPwvqkbw.webp";

export default function Player(props) {
    const navigate = useNavigate();
    
    const onClickMovieItem = () => {
        navigate(`/players/${props.name}`, {
            state: props
        })
    }



    return (
        <div className="movie-container" onClick={onClickMovieItem}>
            <div className='movie-overview'><br/><br/><br/>MORE INFORMATION</div>
            <div className='movie-info'>
                <div style={{width: '72px', height: '72px', marginLeft:'2px', marginRight:'2px' }}>
                    {props.champs_lol_0 && <img src={IMG_c_0 + props.champs_lol_0 + IMG_c_1} style={{ width:'100%' }}/>}
                </div>
                <div>
                    <div style={{ width: '34px', height: '34px', marginLeft:'2px', marginRight:'2px' }}>
                        {props.champs_lol_1 && <img src={IMG_c_0 + props.champs_lol_1 + IMG_c_1} style={{ width:'100%' }}/>}
                    </div>
                    <div style={{ width: '34px', height: '34px', marginLeft:'2px', marginRight:'2px', marginTop:'4px' }}>
                        {props.champs_lol_2 && <img src={IMG_c_0 + props.champs_lol_2 + IMG_c_1} style={{ width:'100%' }}/>}
                    </div>
                </div>
                <div style={{ width: '122px', height: '72px', marginLeft:'16px', marginRight: '2px' }}>
                    <div style={{ fontSize: '12px'}}>{props.nickname}</div>
                    <div style={{ fontSize: '30px', fontWeight:'bold' }}>{props.name}</div>
                    <div style={{ fontSize: '12px' }}>"{props.tmi}"</div>
                </div>
            </div>


            <div className='movie-info' style={{marginTop:'-20px' }}>
                <div className='lol'>
                    <div style={{ display:'flex' }}>
                        <div style={{width: '20px', height: '20px', marginLeft:'2px', marginRight:'2px' }}>
                            {props.position_lol_0 && <img src={IMG_p_0 + props.position_lol_0 + IMG_p_1}/>}
                        </div>
                        <div style={{width: '20px', height: '20px', marginLeft:'2px', marginRight:'2px' }}>
                            {props.position_lol_1 && <img src={IMG_p_0 + props.position_lol_1 + IMG_p_1}/>}
                        </div>
                        <div style={{width: '20px', height: '20px', marginLeft:'2px', marginRight:'2px' }}>
                            {props.position_lol_2 && <img src={IMG_p_0 + props.position_lol_2 + IMG_p_1}/>}
                        </div>
                    </div>
                    <div style={{ display:'flex', marginTop:'4px' }}>
                        <div style={{width: '43px', height: '43px', marginLeft:'2px', marginRight:'2px' }}>
                            {props.tier_lol_top_0 && <img src={IMG_t_0 + props.tier_lol_top_0 + IMG_t_1} style={{width:'100%'}}/>}
                        </div>
                        <div>
                            <div style={{ fontSize: '12px', fontWeight:'bold', textAlign:'center', marginTop:'2px' }}>LOL</div>
                            <div style={{ width: '27px', height: '27px',marginLeft:'2px', marginRight:'2px' }}>
                                {props.tier_lol_pre_0 && <img src={IMG_t_0 + props.tier_lol_pre_0 + IMG_t_1} style={{width:'100%'}}/>}
                            </div>
                        </div>
                    </div>
                </div>
                <div className='val'>
                    <div style={{ display:'flex' }}>
                        <div style={{width: '20px', height: '20px', marginLeft:'2px', marginRight:'2px' }}>
                            {props.position_val_0 && <img style={{ width:"80%" }} src={props.position_val_0 === '타격대' ? 타격대 : props.position_val_0 === '척후대' ? 척후대 : props.position_val_0 === '감시자' ? 감시자 : 전략가} />}
                        </div>
                        <div style={{width: '20px', height: '20px', marginLeft:'2px', marginRight:'2px' }}>
                            {props.position_val_1 && <img style={{ width:"80%" }} src={props.position_val_1 === '타격대' ? 타격대 : props.position_val_1 === '척후대' ? 척후대 : props.position_val_1 === '감시자' ? 감시자 : 전략가} />}
                        </div>
                        <div style={{width: '20px', height: '20px', marginLeft:'2px', marginRight:'2px'}}>
                            {props.position_val_2 && <img style={{ width:"80%" }} src={props.position_val_2 === '타격대' ? 타격대 : props.position_val_2 === '척후대' ? 척후대 : props.position_val_2 === '감시자' ? 감시자 : 전략가} />}
                        </div>
                    </div>
                    <div style={{ display:'flex', marginTop:'4px' }}>
                        <div style={{width: '43px', height: '43px', marginLeft:'2px', marginRight:'2px' }}>
                            {props.tier_val_top_0 ? <img src={IMG_t_v_0 + props.tier_val_top_0 + IMG_t_v_1} style={{width:'100%'}}/> : <img src={언랭} style={{width:'100%'}}/>}
                        </div>
                        <div>
                            <div style={{ fontSize: '12px', fontWeight:'bold', textAlign:'center', marginTop:'2px' }}>VAL</div>
                            <div style={{ width: '27px', height: '27px', marginLeft:'2px', marginRight:'2px' }}>
                                {props.tier_val_pre_0 ? <img src={IMG_t_v_0 + props.tier_val_pre_0 + IMG_t_v_1} style={{width:'100%'}}/> : <img src={언랭} style={{width:'100%'}}/>}
                            </div>
                        </div>
                    </div>
                </div>
                <div className='tft'>
                    <div style={{ display:'flex' }}>
                        <div style={{width: '20px', height: '20px', marginLeft:'2px', marginRight:'2px' }}></div>
                        <div style={{width: '20px', height: '20px', marginLeft:'2px', marginRight:'2px' }}></div>
                        <div style={{width: '20px', height: '20px', marginLeft:'2px', marginRight:'2px' }}></div>
                    </div>
                    <div style={{ display:'flex', marginTop:'4px' }}>
                        <div style={{width: '43px', height: '43px', marginLeft:'2px', marginRight:'2px' }}>
                            {props.tier_tft_top_0 && <img src={IMG_t_0 + props.tier_tft_top_0 + IMG_t_1} style={{width:'100%'}}/>}
                        </div>
                        <div>
                            <div style={{ fontSize: '12px', fontWeight:'bold', textAlign:'center', marginTop:'2px' }}>TFT</div>
                            <div style={{ width: '27px', height: '27px', marginLeft:'2px', marginRight:'2px' }}>
                                {props.tier_tft_pre_0 && <img src={IMG_t_0 + props.tier_tft_pre_0 + IMG_t_1} style={{width:'100%'}}/>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}