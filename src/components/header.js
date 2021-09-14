import React from 'react';
import style from './header.module.css';

const Header = () => {
    const menu = [
        'ABOUT',
        '|',
        'PHOTOGRAPHY',
        '|',
        'ARCHITECTURE',
        '|',
        'CONTACT'
    ];

    const menuItems = menu.map((item, i) => <p key={ i }>{ item }</p>);

    return (
        <div className={ style.container }>
            <h1>ALEXANDER HAYDAR</h1>
            <div className={ style.menuContainer }>
                { menuItems }
            </div>
        </div>
    );
}

export default Header;