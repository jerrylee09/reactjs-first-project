import React from 'react'
import { render } from 'react-dom'
// import { hello, goodbye} from './lib'
import { App } from './components/App'
// import { SkiDayList } from './components/SkyDaylist.js'
// import { SkiDayCount } from './components/SkiDayCount.js'
// import { BsModal } from './components/BsModal.js'

window.React = React;

// render(
//     <SkiDayCount
//         total={70}
//         powder={30}
//         backcountry={40}
//         goal={100}
//     />,
//     document.getElementById('react-container')
// );

render(
    <App/>,
    document.getElementById('react-container')
);




// render(
//     <BsModal />,
//     document.getElementById('bs-modal')
// );