import React from 'react'
import { createClass } from 'react'
// import { SkiDayList } from './compnents/SkiDayCount'
// import { SkiDayCount } from './components/SkiDayCount'

export const App = createClass ({
    getInitialState() {
        return {
            allSkiDays: [
                {
                    resort: "Sqaw Valley",
                    date: new Date('9/9/2017'),
                    powder: true,
                    backcountry:false

                },
                {
                    resort: "Jerry House",
                    date: new Date('7/4/2017'),
                    powder: false,
                    backcountry:false

                },
                {
                    resort: "jerry Bedroom",
                    date: new Date('7/4/2017'),
                    powder: false,
                    backcountry:true

                }
            ]
        };
    },
    render() {
        return (
            <div className="app">
                {this.state.allSkiDays[0]["resort"]}
            </div>
        )
    }
});
