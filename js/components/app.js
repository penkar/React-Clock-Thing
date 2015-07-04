'use strict';
var Row = require('./row.js');

var App = module.exports = React.createClass({
  render: function(){
    var rows = [];
    for(var i = 0; i < 24; i++){
      rows.push(<Row />);
    }
    return(
      <div className="app">
        {rows}
      </div>
    )
  }
})