import React from 'react';
import '../styles/info.scss'

export const Info = () => {
    return (
        <div className='info'>
            <div>
                <h2>Заходи безпеки при використанні банківських продуктів</h2>
                <p>ПриватБанк завжди гарантує збереження Ваших коштів, але і Ви повинні дбати про безпеку своїх грошей. Ми склали 23 простих правил, дотримуючись яких Ви зможете не стати жертвами шахраїв. Рекомендуємо ознайомитися.</p>
            </div>
            <img src="https://d2z9uwnt8eubh7.cloudfront.net/media/default/0001/01/d40efa3e260f0a8a7909a334326b34ed8c523199.png" alt="" />
        </div>
    );
};
