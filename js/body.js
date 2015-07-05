'use strict'
var App = require('./components/app.js');

var Body = React.createClass({
  render: function(){
    var message = 'React has been successfully running for ' + this.props.time + ' seconds.';
    return (
      <div id="wrapper">{message}
        <App time={this.props.time} />
      </div>
    )
  }
});

// setInterval(function(){
  React.render(
    <Body time={new Date()} />,
    document.getElementById('mount')
  );
// }, 50 );