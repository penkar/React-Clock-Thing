'use strict';
var Minute = require('./minute.js')

var Row = module.exports = React.createClass({
  render: function(){
    var minutes = [];
    for(var i = 0; i < 24; i++){
      minutes.push(<Minute />)
    }
    return (
      <div className="row">Minutes
      </div>
    )
  }
})