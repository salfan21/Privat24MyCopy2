import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/transferBlock.scss'

const TransferBlock = ({placeholder, title, img, url, sideText, length}) => {

    const [state, setState] = useState('')
    return (
        <div className='transferBlock'>
            <div className="title">
                <img src={img} alt="-" />
                <h2>{title}</h2>
            </div>
            <div className="data">
                <input value={state} maxLength={length} type="text" placeholder={placeholder} onChange={(e) => setState(e.target.value)}/>
                <NavLink to={url} style={{textDecoration:"none", color:'inherit'}} state={state}><div className='button'>&rarr;</div></NavLink>
            </div>
            <div className="info">
                    <span>{sideText}</span>
            </div>
        </div>
    );
};

export default TransferBlock;