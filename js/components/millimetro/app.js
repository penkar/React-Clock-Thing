import React from 'react'
require('./style.scss');

import {Hour} from './hour';
import {Minute} from './minute';
import {Second} from './second';

export function Millimetro(time) {
  let hours = time.getHours(), minutes = time.getMinutes(), seconds = time.getSeconds()
  return (
    <div className='millimetro'>
      { Hour((hours % 12) * 60 * 60 + minutes * 60 + seconds) }
    </div>
  )
}
