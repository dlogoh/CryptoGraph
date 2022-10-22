import React from "react";

function DateFunction() {
  let tenDaysAgo;
  let pastDay;
  let pastMonth;
  let pastYear;
  let dateArray = [];

  for (let i = 9; i >= 0; i--) {
    tenDaysAgo = new Date(new Date().setDate(new Date().getDate() - i));
    pastDay = tenDaysAgo.getDate();
    pastMonth = tenDaysAgo.getMonth() + 1;
    pastYear = tenDaysAgo.getFullYear();

    dateArray.push(`${pastMonth}/${pastDay}/${pastYear}`);
  }

  dateArray.push("Now");
  return dateArray;
}

export default DateFunction;
