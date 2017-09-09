import React from 'react'
import { render } from 'react-dom'
// import { hello, goodbye} from './lib'
import { SkiDayList } from './components/SkiDayList'
// import { BsModal } from './components/BsModal.js'

window.React = React;

// render(
//     <SkiDayList
//         total={70}
//         powder={30}
//         backcountry={40}
//         goal={100}
//     />,
//     document.getElementById('react-container')
// );

render(
    <SkiDayList
        days={
            [
                {
                    resort: "Sqaw Valley",
                    date: new Date('(9/9/2017'),
                    powder: true,
                    backCountry:false

                },
                {
                    resort: "Jerry House",
                    date: new Date('(7/4/2017'),
                    powder: false,
                    backCountry:false

                },
                {
                    resort: "jerry's Bedroom",
                    date: new Date('(7/4/2017'),
                    powder: false,
                    backCountry:true

                }
            ]
        }
    />,
    document.getElementById('react-container')
);




// render(
//     <BsModal />,
//     document.getElementById('bs-modal')
// );