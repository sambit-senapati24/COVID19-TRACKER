import React from 'react'
import {Link} from 'react-router-dom';
function Header() {

    let inlineStyle = {
        textDecoration : 'none',
        color : 'inherit'
    };

    return (
        <div className = 'header'>
            <span><Link to = '/' style={inlineStyle}>Home</Link></span>
            <span><Link to = '/history' style={inlineStyle}>History</Link></span>
            <span><Link to='/india' style={inlineStyle}>India</Link></span>
            <span><Link to='/worldtracker' style={inlineStyle}>World</Link></span>
        </div>
    )
}

export default Header
