import React from "react";
import { FormatedDates } from "../datesHandler/dateFormater.component";

export const MaximumDate = props => {
  var array = props.dates;
  var dateM = array[0];
  for (let i = 0; i < array.length; i++) {
    if (array[i] > dateM) {
      dateM = array[i];
    }
  }
  return (
    <div className="maximumDate">
      <h2>
        {" "}
        Max Date of Array:
        <FormatedDates date={dateM} />
      </h2>
    </div>
  );
};

export const MinimumDate = props => {
  var array = props.dates;
  var dateM = array[0];
  for (let i = 0; i < array.length; i++) {
    if (array[i] < dateM) {
      dateM = array[i];
    }
  }
  return (
    <div className="minimumDate">
      <h2>
        {" "}
        Min Date of Array:
        <FormatedDates date={dateM} />
      </h2>
    </div>
  );
};

export const QuarterOfYear = props => {
  var quarter = Math.floor((props.date.getMonth() + 3) / 3);
  return (
    <div className="quarterOfYear">
      <h2>
        Quarter of Year for date:
        {quarter}
      </h2>
    </div>
  );
};

export const DifferenceBetweenDates = props => {
  const _MS_PER_DAY = 1000 * 60 * 60 * 24;
  const date1 = new Date(props.dates[0]);
  const date2 = new Date(props.dates[1]);
  const utc1 = Date.UTC(date1.getFullYear(), date1.getMonth(), date1.getDate());
  const utc2 = Date.UTC(date2.getFullYear(), date2.getMonth(), date2.getDate());
  return (
    <div className="differenceBetweenDates">
      <h2>
        Difference between dates:
        {Math.floor((utc2 - utc1) / _MS_PER_DAY)}
      </h2>
    </div>
  );
};

export const DayOfTheWeek = props => {
  var days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  var d = new Date(props.date);
  var dayName = days[d.getDay()];
  return (
    <div className="dayOfTheYear">
      <h2>
        Day of the Week:
        {dayName}
      </h2>
    </div>
  );
};

export const AddDays = props => {
  var result = new Date(props.dates[0]);
  result.setDate(result.getDate() + props.dates[1]);
  return (
    <div className="addDays">
      <h2>
        Date with Days added:
        <FormatedDates date={result} />
      </h2>
    </div>
  );
};
