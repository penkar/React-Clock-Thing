'use strict';
var App = require('./components/app.js');
var Modal = require('./components/modal.js');

var Body = React.createClass({
  render: function(){
    var message = 'React has been successfully running for ' + this.props.time + ' seconds.';
    var a =[<Modal time={this.props.time}/>]
    return (
      <div id="wrapper" style={{height:'100%'}}>
        <App time={this.props.time} />
      </div>
    )
  }
});

setInterval(function(){
  React.render(
    <Body time={new Date()} />,
    document.getElementById('mount')
  );
}, 50 );