import React from 'react';
export function Analog(hours, minutes, seconds) {
  return (
    <div className='analog'>
      <span className='hr'>{hours.toString().padStart(2,'0')}</span>&nbsp;:&nbsp;
      <span className='min'>{minutes.toString().padStart(2,'0')}</span>&nbsp;:&nbsp;
      <span className='sec'>{seconds.toString().padStart(2,'0')}</span>
    </div>
  )
}
