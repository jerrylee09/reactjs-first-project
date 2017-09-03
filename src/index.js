import React from 'react'
import { render } from 'react-dom'
import { hello, goodbye} from './lib'

// const { render } = ReactDOM;

render(
    <div>
        {hello}
        {goodbye}
    </div>,
    document.getElementById('react-container')
);