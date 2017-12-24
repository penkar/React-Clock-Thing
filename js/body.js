import React from 'react';
require('./style.scss');

import {render} from 'react-dom';
import {Nooka, Millimetro} from './components';

class Body extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clock: 'millimetro',
    }
  }
  render() {
    let element;
    switch (this.state.clock) {
      case 'millimetro':
        element = Millimetro(new Date()); break;
      case 'nooka':
      default:
        element = Nooka(new Date()); break;
    }
    return [element, <span className='btn' onClick={this.tag}/>]
  }
  tag = () => {
    let labels = ['millimetro', 'nooka'], {clock} = this.state;
    let idx = (labels.indexOf(clock) + 1) % labels.length;
    this.setState({clock: labels[idx]});
  }
}

setInterval(function(){
  render(<Body />, document.getElementById('mount'));
}, 500 );
