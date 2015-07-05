'use strict'
var Minute = module.exports = React.createClass({
  render: function(){
    var time = this.props.time, style;
    var at = this.props.rowNum*30 + this.props.minNum;
    var ct = (time.getHours()%12)*60 + time.getMinutes();
    if(time.getHours() >= 12){
      style = at < ct ? 'silver minute' : 'minute gray';    
    } else {
      style = at > ct ? 'black minute' : 'minute gray';
    }
    return (
      <div className={style}></div>
    );
  }
})