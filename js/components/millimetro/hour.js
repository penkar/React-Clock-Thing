import React from 'react';

export function Hour(hours) {
  return (
    <div className='hours' style={{transform:`rotate(-${360* hours / 43200}deg)`}}>
      <div className='hour'>
        <div className='contents'>12</div>
      </div>
      <div className='hour'>
        <div className='contents'>01</div>
      </div>
      <div className='hour'>
        <div className='contents'>02</div>
      </div>
      <div className='hour'>
        <div className='contents'>03</div>
      </div>
      <div className='hour'>
        <div className='contents'>04</div>
      </div>
      <div className='hour'>
        <div className='contents'>05</div>
      </div>
      <div className='hour'>
        <div className='contents'>06</div>
      </div>
      <div className='hour'>
        <div className='contents'>07</div>
      </div>
      <div className='hour'>
        <div className='contents'>08</div>
      </div>
      <div className='hour'>
        <div className='contents'>09</div>
      </div>
      <div className='hour'>
        <div className='contents'>10</div>
      </div>
      <div className='hour'>
        <div className='contents'>11</div>
      </div>
    </div>
  )
}
