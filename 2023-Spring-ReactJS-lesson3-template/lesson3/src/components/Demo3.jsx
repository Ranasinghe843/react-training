import React from 'react';
import './Demo3.css';

// Components are functions which are exported to be used elsewhere
export default function Demo3() {
    // Components return things to render something on the page
    return (
        <>
        {/* JSX to be rendered */}
        <p className='text-brown'>This text is brown</p>
        </>
    );

    /* NOTE: The empty html tags (<> & </>) are called react fragments. We use these to group
    together child elements (the content inside of them) because return statements may only
    return a single parent element. */
}
