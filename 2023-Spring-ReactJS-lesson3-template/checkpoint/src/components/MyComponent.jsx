import React from 'react';

// Components are functions which are exported to be used elsewhere
export default function MyComponent() {
    const titleImage = <img src='https://images.unsplash.com/photo-1565127803082-69dd82351360?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2342&q=80' alt='Boston'/>
    // Components return things to render something on the page
    return (
        <>
        {titleImage}
        </>
    );

    /* NOTE: The empty html tags (<> & </>) are called react fragments. We use these to group
    together child elements (the content inside of them) because return statements may only
    return a single parent element. */
}