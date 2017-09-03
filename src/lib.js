import React from 'react';
import text from './titles.json';

export const hello = (
    <h1
        id="title'
        className='header"
        style={{background: 'blue', color: 'white'}}
    >
        {text.hello}
    </h1>
);

export const goodbye = (
    <h1
        id="title"
        className="header"
        style={{background: 'black', color: 'white'}}
    >
        {text.goodbye}
    </h1>
);