import React, { Component } from 'react'
import DayPicker, { DateUtils } from 'react-day-picker'
import { filterArticlesByDate } from '../../AC/'

import 'react-day-picker/lib/style.css';

import { connect } from 'react-redux';

class DateRange extends Component {

    handleDayClick = (day) => {
        const { filterArticlesByDate, date } = this.props;
        filterArticlesByDate(DateUtils.addDayToRange(day, date));
    }

    render() {
        const { from, to } = this.props.date;
        const selectedRange = from && to && `${from.toDateString()} - ${to.toDateString()}`
        return (
            <div className="date-range">
                <DayPicker
                    ref="daypicker"
                    selectedDays={ day => DateUtils.isDayInRange(day, { from, to }) }
                    onDayClick={ this.handleDayClick }
                />
                {selectedRange}
            </div>
        );
    }

}

function mapStateToProps(state) {
    return {
        date: state.dateRange
    }
}

export default connect(
    mapStateToProps, {
        filterArticlesByDate
    }
)(DateRange)