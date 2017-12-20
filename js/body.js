import React from 'react'
import {render} from 'react-dom';
import {App} from './components'

class Body extends React.Component {
  render() {
    var message = 'React has been successfully running for ' + this.props.time + ' seconds.';
    return (
      <div id="wrapper" style={{height:'100%'}}>
        <App time={this.props.time} />
      </div>
    )
  }
};

setInterval(function(){
  render(
    App(new Date()),
    document.getElementById('mount')
  );
}, 50 );