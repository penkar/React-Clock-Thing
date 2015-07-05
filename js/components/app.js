'use strict';
var Row = require('./row.js');

var App = module.exports = React.createClass({
  render: function(){
    var rows = [];
    for(var i = 1; i < 25; i++){
      rows.push(<Row key={i} rowNum={i}/>);
    }
    return(
      <div className="app">
        {rows}
      </div>
    )
  }
})