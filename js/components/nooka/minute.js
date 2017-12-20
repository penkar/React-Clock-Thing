import React from 'react';
export function Minute({time, row, min, hours, minutes}) {
  var cls, at = row*30 + min, ct = (hours % 12) * 60 + minutes;
  if(hours >= 12){
    cls = at < ct ? 'silver' : 'gray';    
  } else {
    cls = at > ct ? 'black' : 'gray';
  }
  return <div className={`minute ${cls}`} key={min}/>
}