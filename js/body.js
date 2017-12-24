import React from 'react'
import {render} from 'react-dom';
import {Nooka, Millimetro} from './components'

class Body extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clock: 'millimetro',
    }
  }
  render() {
    switch (this.state.clock) {
      case 'millimetro':
        return Millimetro(new Date());
      case 'nooka':
      default:
        return Nooka(new Date());
    }
  }
}

setInterval(function(){
  render(
    <Body />,
    document.getElementById('mount')
  );
}, 500 );
