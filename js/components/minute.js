'use strict'
var Minute = module.exports = React.createClass({
  render: function(){
    var time = this.props.time;
    var at = this.props.rowNum*30 + this.props.minNum;
    var ct = (time.getHours()%12)*60 + time.getMinutes();
    var style = at < ct ? 'due minute' : 'minute';
    return (
      <div className={style}></div>
    )
  }
})