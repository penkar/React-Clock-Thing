import React from 'react'
import {render} from 'react-dom';
import {App} from './components/nooka'

class Body extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clock: 'nooka',
    }
  }
  render() {
    return App(new Date());
  }
}

setInterval(function(){
  render(
    <Body />,
    document.getElementById('mount')
  );
}, 50 );