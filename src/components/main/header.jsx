import React from 'react';
import {Link} from 'react-router-dom';

export const Header = (props) => {
    return(
        <nav>
            <div className="bank">Dollars Bank</div>
                <ul className="nav">
                    <li><Link to='/home' className='link'>Home</Link></li>
                    <li><Link to='/transactions' className='link'>Recent Transactions</Link></li>
                </ul>
        </nav>
    )
}