import Terrain from 'react-icons/lib/md/terrain'
import SnowFlake from 'react-icons/lib/ti/weather-snow'
import Calendar from 'react-icons/lib/fa/calendar'
import { SkiDayRow } from './SkiDayRow.js'
import { PropTypes } from 'prop-types'

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
                        <SkiDayRow
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

// SkiDayList.propTypes = {
//   days: PropTypes.array
// };

SkiDayList.propTypes = {
    days: function(props) {
        if(!Array.isArray(props.days)) {
            return new Error('SkiDayList Should be an array');
        } else if(!props.days.length) {
            return new Error('SkiDayList must have at least one recor');
        } else {
            return null;
        }
    }
};