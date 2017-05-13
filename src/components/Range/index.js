import React, { Component } from 'react';
import moment from 'moment';
import DayPicker, { DateUtils } from 'react-day-picker';

import 'react-day-picker/lib/style.css';

export default class Range extends Component {
  state = {
    from: null,
    to: null,
  };

  handleDayClick = day => {
    const range = DateUtils.addDayToRange(day, this.state);
    this.setState(range);
  };

  handleResetClick = e => {
    e.preventDefault();
    this.setState({
      from: null,
      to: null,
    });
  };

  getNormalDate(date) {
    return moment(date).format('L');
  }

  render() {
    const { from, to } = this.state;
    return (
      <div className="RangeExample">
        {!from && !to && <p>Please select the <strong>first day</strong>.</p>}
        {from && !to && <p>Please select the <strong>last day</strong>.</p>}
        {from &&
          to &&
          <p>
            You chose from
            {' '}
            {this.getNormalDate(from)}
            {' '}
            to
            {' '}
            {this.getNormalDate(to)}
            .
            {' '}<a href="." onClick={this.handleResetClick}>Reset</a>
          </p>}
        <DayPicker
          numberOfMonths={2}
          selectedDays={[from, { from, to }]}
          onDayClick={this.handleDayClick}
        />
      </div>
    );
  }
}