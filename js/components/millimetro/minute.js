import React from 'react'
export function Minute(minutes) {
  return (
    <div className='minutes' style={{transform:`rotate(-${360* minutes / 3600}deg)`}}>
      <div className='minute'>
        <div className='contents'>00</div>
      </div>
      <div className='minute'>
        <div className='contents'>05</div>
      </div>
      <div className='minute'>
        <div className='contents'>10</div>
      </div>
      <div className='minute'>
        <div className='contents'>15</div>
      </div>
      <div className='minute'>
        <div className='contents'>20</div>
      </div>
      <div className='minute'>
        <div className='contents'>25</div>
      </div>
      <div className='minute'>
        <div className='contents'>30</div>
      </div>
      <div className='minute'>
        <div className='contents'>35</div>
      </div>
      <div className='minute'>
        <div className='contents'>40</div>
      </div>
      <div className='minute'>
        <div className='contents'>45</div>
      </div>
      <div className='minute'>
        <div className='contents'>50</div>
      </div>
      <div className='minute'>
        <div className='contents'>55</div>
      </div>
    </div>
  )
}
