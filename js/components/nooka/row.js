import React from 'react';
import {Minute} from './minute';
export function Row({time, row, hours, minutes}) {
  var minutesRow = [];
  for(let min = 0; min < 30; min++) {
    // minutes.push(<Minute row={i} minNum={i} rowNum={row} time={time} />);
    minutesRow.push(Minute({time, row, min, hours, minutes}));
  }
  return (
    <div className="nooka-row" key={row}>
      { minutesRow }
    </div>
  );
}