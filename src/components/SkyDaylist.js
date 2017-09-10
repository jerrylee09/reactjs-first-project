import Terrain from 'react-icons/lib/md/terrain'
import SnowFlake from 'react-icons/lib/ti/weather-snow'
import Calendar from 'react-icons/lib/fa/calendar'
import { SkyDayRow } from './SkyDayRow.js'

export const SkiDayList = ({days}) => (
    <table>
        <thead>
        <tr>
            <th>Date</th>
            <th>Resort</th>
            <th>Powder</th>
            <th>Backcountry</th>
        </tr>
        </thead>
        <tbody>
            {
                days.map(
                    (day, i) =>
                        <SkyDayRow
                            key={i}
                            // resort={day.resort}
                            // date={day.date}
                            // powder={day.powder}
                            // backcountry={day.backcountry}
                            {...day} // this is es6 spread operator short hand for example above
                        />
                )
            }
        </tbody>
    </table>
);