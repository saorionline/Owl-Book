import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <ul className = 'mainmenu'>
            <li className='has-droupdown'><Link to='#'>Home</Link>
                <ul>
                    <li><Link to='/business-consulting'>Business Consulting</Link></li>
                    <li><Link to='/business-consulting-2'>Business Consulting 02</Link></li>
                    <li><Link to='/corporate'>Corporate</Link></li>

                </ul>
            </li>
            <li><Link to='/about-us'>About</Link></li>

            <li className= 'with-meganu'>
                <Link to= '#'>Elements</Link>
                <div className = 'rn-megamenu'>
                    
                </div>
            </li>
        </ul>
    )
}