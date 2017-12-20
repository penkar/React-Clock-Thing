import React from 'react';
import {Row} from './row';

export function App(time) {
  var rows = [], hours = time.getHours(), minutes = time.getMinutes();
  for(let row = 0; row < 24; row++) {
    rows.push(Row({time, row, hours, minutes}));
  }
  return (
    <div className="app">
      { rows }
    </div>
  )
}
