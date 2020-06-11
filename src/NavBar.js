import React from 'react';

function NavBar({onPageChange}) {
    return (
        <nav>
            <ul>
                <li><a href='/' onClick={event => {
                    event.preventDefault()
                    onPageChange('comments')
                }}>Comments</a></li>
                <li><a href="/hello" onClick={event => {
                    event.preventDefault()
                    onPageChange('hello')
                }}>Hello</a></li>
            </ul>
        </nav>
    )
}

export default NavBar;