'use strict';
var Minute = require('./minute.js')

var Row = module.exports = React.createClass({
  render: function(){
    var minutes = [];
    for(var i = 1; i < 31; i++){
      minutes.push(<Minute key={i} minNum={i} />)
    }
    return (
      <div className="row">
        {minutes}
      </div>
    )
  }
})