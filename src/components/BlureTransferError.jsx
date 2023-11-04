import React from 'react';
import '../styles/blureTransferError.scss'
const BlureTransferError = ({switchFunc}) => {

    return (
        <div className='blureTransferError'>
            <div className="modal">
                <h2>Помилка</h2>
                <p>Перевірте правильність введених даних</p>
                <div className="btn">
                    <span onClick={switchFunc}>OK</span>
                </div>
            </div>
        </div>
    );
};

export default BlureTransferError;