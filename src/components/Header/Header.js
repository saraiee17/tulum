import './Header.scss';
import {Link} from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useNavigate,useLocation } from 'react-router-dom';

function Header(){
    const navigate = useNavigate();
    const location = useLocation();

    const currentPath = location.pathname;

    return(
        <div className='header'>
                <div className='header__flex'>
                    <span class="material-symbols-rounded" onClick={() => navigate('/modal')}>menu</span>
                    <h1 className='header__title'>Tulum Loft for Sale</h1>
                </div>
                <div className='header__navflex'>
                    <Link to='/'>
                        <p className={currentPath === '/' ? 'header__nav underline' : 'header__nav'}>Home</p>
                    </Link>
                    <Link to='/Contact'>
                        <p className={currentPath === '/Contact' ? 'header__nav underline' : 'header__nav'}>Contact</p>
                    </Link>
                </div>

        </div>
    )
}

export default Header;