import React from 'react'
import Player from '../components/Player'
import { dummy } from "../PlayerDummy";

export default function Players() {
    return (
        <div>
            <div className="movies-container">
                {
                dummy.results.map((item) => {
                    return (
                    <Player
                        name={item.name}
                        nickname={item.nickname}
                        tmi={item.tmi}
                        
                        tier_lol_pre_0={item.tier_lol_pre[0]}
                        tier_lol_pre_1={item.tier_lol_pre[1]}
                        tier_lol_top_0={item.tier_lol_top[0]}
                        tier_lol_top_1={item.tier_lol_top[1]}
                        tier_lol_season={item.tier_lol_top[2]}
                        position_lol_0={item.position_lol[0]}
                        position_lol_1={item.position_lol[1]}
                        position_lol_2={item.position_lol[2]}
                        champs_lol_0={item.champs_lol[0]}
                        champs_lol_1={item.champs_lol[1]}
                        champs_lol_2={item.champs_lol[2]}

                        tier_val_pre_0={item.tier_val_pre[0]}
                        tier_val_pre_1={item.tier_val_pre[1]}
                        tier_val_top_0={item.tier_val_top[0]}
                        tier_val_top_1={item.tier_val_top[1]}
                        tier_val_season={item.tier_val_top[2]}
                        position_val_0={item.position_val[0]}
                        position_val_1={item.position_val[1]}
                        position_val_2={item.position_val[2]}
                        champs_val_0={item.champs_val[0]}
                        champs_val_1={item.champs_val[1]}
                        champs_val_2={item.champs_val[2]}

                        tier_tft_pre_0={item.tier_tft_pre[0]}
                        tier_tft_pre_1={item.tier_tft_pre[1]}
                        tier_tft_top_0={item.tier_tft_top[0]}
                        tier_tft_top_1={item.tier_tft_top[1]}
                        tier_tft_season={item.tier_tft_top[2]}
                    />
                    )
                })
                }
            </div>
        </div>
    )
}