import React from 'react';
import '../styles/miniInfo.scss'
const MiniInfo = ({img, title, text}) => {
    return (
        <div className='miniInfo'>
            <h2>{title}</h2>
            <div><img src={img} alt="" /> <p>{text}</p></div>
        </div>
    );
};

export default MiniInfo;