import React from 'react'
export function Second(seconds) {
  return (
    <div className='seconds' style={{transform:`rotate(-${360* seconds / 60}deg)`}}>
      <div className='second'>
        <div className='contents'>00</div>
      </div>
      <div className='second'>
        <div className='contents'>05</div>
      </div>
      <div className='second'>
        <div className='contents'>10</div>
      </div>
      <div className='second'>
        <div className='contents'>15</div>
      </div>
      <div className='second'>
        <div className='contents'>20</div>
      </div>
      <div className='second'>
        <div className='contents'>25</div>
      </div>
      <div className='second'>
        <div className='contents'>30</div>
      </div>
      <div className='second'>
        <div className='contents'>35</div>
      </div>
      <div className='second'>
        <div className='contents'>40</div>
      </div>
      <div className='second'>
        <div className='contents'>45</div>
      </div>
      <div className='second'>
        <div className='contents'>50</div>
      </div>
      <div className='second'>
        <div className='contents'>55</div>
      </div>
    </div>
  )
}
