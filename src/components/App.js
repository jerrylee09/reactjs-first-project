import React from 'react'
import { createClass } from 'react'
import { SkiDayList } from './SkiDaylist'
import { SkiDayCount } from './SkiDayCount'

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
    countDays(filter) {
        const { allSkiDays } = this.state
        return allSkiDays.filter(
            (day) =>  (filter) ? day['filter'] : day).length
    },
    render() {
        return (
            <div className="app">
                <SkiDayList days={this.state.allSkiDays}/>
                <SkiDayCount
                     total={this.countDays()}
                     powder={this.countDays("powder")}
                     backcountry={this.countDays("backcountry")}
                />
            </div>
        )
    }
});
