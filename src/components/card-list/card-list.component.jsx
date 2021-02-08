import React from "react";
import './card-list.style.css';
import {Card} from "../card/card.component";

export const CardList = props => (
    <div>
        <h1 className="header">Monsters</h1>
        <div className='card-list'>
            {props.monsters.map((m, i) => (<Card key={i} monster={m}/>))}
        </div>
    </div>
);