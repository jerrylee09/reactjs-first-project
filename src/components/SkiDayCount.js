import React from 'react'
import '../stylesheets/ui.scss'



export const SkiDayCount = React.createClass({

    percentToDecimal(decimal) {
        return ((decimal * 100) + '%')
    },
    calcGoalProgress(total, goal) {
        return this.percentToDecimal(total/goal)
    },
    render() {
        const total = this.props.total;
        const power = this.props.powder;
        const backcountry = this.props.backcountry;
        const goal = this.props.goal;
        const totalCal = this.calcGoalProgress;
        return (
            <div className="ski-day-count">
                <div className="total-days">
                    <span>{total}</span>
                    <span> days</span>
                </div>
                <div className="powder-days">
                    <span>{power}</span>
                    <span> days</span>
                </div>
                <div className="backcountry-days">
                    <span>{backcountry}</span>
                    <span> hiking day</span>
                </div>
                <div >
                    <span>{totalCal( total, goal)}</span>
                </div>

            </div>
        )
    }
});
