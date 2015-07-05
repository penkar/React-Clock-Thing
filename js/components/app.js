'use strict';
var Row = require('./row.js');

var App = module.exports = React.createClass({
  render: function(){
    var rows = [];
    for(var i = 0; i < 24; i++){
      rows.push(<Row key={i} rowNum={i} time={this.props.time}/>);
    }
    return(
      <div className="app">
        {rows}
      </div>
    )
  }
})