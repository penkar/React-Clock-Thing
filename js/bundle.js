(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict'
var App = require('./components/app.js');

var Body = React.createClass({displayName: "Body",
  render: function(){
    var message = 'React has been successfully running for ' + this.props.time + ' seconds.';
    return (
      React.createElement("div", {id: "wrapper"}, message, 
        React.createElement(App, {time: this.props.time})
      )
    )
  }
});

// setInterval(function(){
  React.render(
    React.createElement(Body, {time: new Date()}),
    document.getElementById('mount')
  );
// }, 50 );
},{"./components/app.js":2}],2:[function(require,module,exports){
'use strict';
var Row = require('./row.js');

var App = module.exports = React.createClass({displayName: "exports",
  render: function(){
    var rows = [];
    for(var i = 0; i < 24; i++){
      rows.push(React.createElement(Row, {key: i, rowNum: i, time: this.props.time}));
    }
    return(
      React.createElement("div", {className: "app"}, 
        rows
      )
    )
  }
})
},{"./row.js":4}],3:[function(require,module,exports){
'use strict'
var Minute = module.exports = React.createClass({displayName: "exports",
  render: function(){
    var time = this.props.time;
    var at = this.props.rowNum*30 + this.props.minNum;
    var ct = (time.getHours()%12)*60 + time.getMinutes();
    var style = at < ct ? 'due minute' : 'minute';
    return (
      React.createElement("div", {className: style})
    )
  }
})
},{}],4:[function(require,module,exports){
'use strict';
var Minute = require('./minute.js')

var Row = module.exports = React.createClass({displayName: "exports",
  render: function(){
    var minutes = [];
    for(var i = 0; i < 30; i++){
      minutes.push(React.createElement(Minute, {key: i, minNum: i, rowNum: this.props.rowNum, time: this.props.time}))
    }
    return (
      React.createElement("div", {className: "row"}, 
        minutes
      )
    )
  }
})
},{"./minute.js":3}]},{},[1])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy93YXRjaGlmeS9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIiwianMvYm9keS5qcyIsImpzL2NvbXBvbmVudHMvYXBwLmpzIiwianMvY29tcG9uZW50cy9taW51dGUuanMiLCJqcy9jb21wb25lbnRzL3Jvdy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNYQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIndXNlIHN0cmljdCdcbnZhciBBcHAgPSByZXF1aXJlKCcuL2NvbXBvbmVudHMvYXBwLmpzJyk7XG5cbnZhciBCb2R5ID0gUmVhY3QuY3JlYXRlQ2xhc3Moe2Rpc3BsYXlOYW1lOiBcIkJvZHlcIixcbiAgcmVuZGVyOiBmdW5jdGlvbigpe1xuICAgIHZhciBtZXNzYWdlID0gJ1JlYWN0IGhhcyBiZWVuIHN1Y2Nlc3NmdWxseSBydW5uaW5nIGZvciAnICsgdGhpcy5wcm9wcy50aW1lICsgJyBzZWNvbmRzLic7XG4gICAgcmV0dXJuIChcbiAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge2lkOiBcIndyYXBwZXJcIn0sIG1lc3NhZ2UsIFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEFwcCwge3RpbWU6IHRoaXMucHJvcHMudGltZX0pXG4gICAgICApXG4gICAgKVxuICB9XG59KTtcblxuLy8gc2V0SW50ZXJ2YWwoZnVuY3Rpb24oKXtcbiAgUmVhY3QucmVuZGVyKFxuICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQm9keSwge3RpbWU6IG5ldyBEYXRlKCl9KSxcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbW91bnQnKVxuICApO1xuLy8gfSwgNTAgKTsiLCIndXNlIHN0cmljdCc7XG52YXIgUm93ID0gcmVxdWlyZSgnLi9yb3cuanMnKTtcblxudmFyIEFwcCA9IG1vZHVsZS5leHBvcnRzID0gUmVhY3QuY3JlYXRlQ2xhc3Moe2Rpc3BsYXlOYW1lOiBcImV4cG9ydHNcIixcbiAgcmVuZGVyOiBmdW5jdGlvbigpe1xuICAgIHZhciByb3dzID0gW107XG4gICAgZm9yKHZhciBpID0gMDsgaSA8IDI0OyBpKyspe1xuICAgICAgcm93cy5wdXNoKFJlYWN0LmNyZWF0ZUVsZW1lbnQoUm93LCB7a2V5OiBpLCByb3dOdW06IGksIHRpbWU6IHRoaXMucHJvcHMudGltZX0pKTtcbiAgICB9XG4gICAgcmV0dXJuKFxuICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7Y2xhc3NOYW1lOiBcImFwcFwifSwgXG4gICAgICAgIHJvd3NcbiAgICAgIClcbiAgICApXG4gIH1cbn0pIiwiJ3VzZSBzdHJpY3QnXG52YXIgTWludXRlID0gbW9kdWxlLmV4cG9ydHMgPSBSZWFjdC5jcmVhdGVDbGFzcyh7ZGlzcGxheU5hbWU6IFwiZXhwb3J0c1wiLFxuICByZW5kZXI6IGZ1bmN0aW9uKCl7XG4gICAgdmFyIHRpbWUgPSB0aGlzLnByb3BzLnRpbWU7XG4gICAgdmFyIGF0ID0gdGhpcy5wcm9wcy5yb3dOdW0qMzAgKyB0aGlzLnByb3BzLm1pbk51bTtcbiAgICB2YXIgY3QgPSAodGltZS5nZXRIb3VycygpJTEyKSo2MCArIHRpbWUuZ2V0TWludXRlcygpO1xuICAgIHZhciBzdHlsZSA9IGF0IDwgY3QgPyAnZHVlIG1pbnV0ZScgOiAnbWludXRlJztcbiAgICByZXR1cm4gKFxuICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7Y2xhc3NOYW1lOiBzdHlsZX0pXG4gICAgKVxuICB9XG59KSIsIid1c2Ugc3RyaWN0JztcbnZhciBNaW51dGUgPSByZXF1aXJlKCcuL21pbnV0ZS5qcycpXG5cbnZhciBSb3cgPSBtb2R1bGUuZXhwb3J0cyA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtkaXNwbGF5TmFtZTogXCJleHBvcnRzXCIsXG4gIHJlbmRlcjogZnVuY3Rpb24oKXtcbiAgICB2YXIgbWludXRlcyA9IFtdO1xuICAgIGZvcih2YXIgaSA9IDA7IGkgPCAzMDsgaSsrKXtcbiAgICAgIG1pbnV0ZXMucHVzaChSZWFjdC5jcmVhdGVFbGVtZW50KE1pbnV0ZSwge2tleTogaSwgbWluTnVtOiBpLCByb3dOdW06IHRoaXMucHJvcHMucm93TnVtLCB0aW1lOiB0aGlzLnByb3BzLnRpbWV9KSlcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge2NsYXNzTmFtZTogXCJyb3dcIn0sIFxuICAgICAgICBtaW51dGVzXG4gICAgICApXG4gICAgKVxuICB9XG59KSJdfQ==
