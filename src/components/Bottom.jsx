import React, { useContext } from 'react';

import '../styles/bottom.scss'
import ThemeContext from '../HOC/Theme'

const Bottom = () => {

    const {theme, toggleTheme} = useContext(ThemeContext)
    return (
        <div className='bottom'>
            <div className="bottom_item">
                <div className="bottom_item_contact">
                    <p>3700 <span>бeзкоштовно з мобільних</span></p>
                    <p>+38-073-716-11-31 <span>для дзвінків з-за кордону</span></p>
                </div>
                <div className='bottom_item_license'><span>© 2023 ПриватБанк Ліцензія № 22 від 19.03.1992</span></div>
            </div>
            <div className="bottom_item">
                <div className="bottom_item_switchers">
                    <div className="bottom_item_switchers_language"><img src="https://img.freepik.com/premium-photo/ukrainian-flag-of-ukraine_469558-1813.jpg" alt="" />Українська</div>
                    {/* <div className="bottom_item_switchers_theme" onClick={toggleTheme} style={{cursor:"pointer"}}>{theme}</div> */}
                    <div className={"theme" + " " + theme} onClick={toggleTheme}>
                        <div className="switcher">

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Bottom;