'use strict';
var Minute = require('./minute.js')

var Row = module.exports = React.createClass({
  render: function(){
    var minutes = [];
    for(var i = 0; i < 30; i++){
      minutes.push(<Minute key={i} minNum={i} rowNum={this.props.rowNum} time={this.props.time} />)
    }
    return (
      <div className="row">
        {minutes}
      </div>
    )
  }
})