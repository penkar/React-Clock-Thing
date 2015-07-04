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

setInterval(function(){
  React.render(
    React.createElement(Body, {time: new Date()}),
    document.getElementById('mount')
  );
}, 50 );
},{"./components/app.js":2}],2:[function(require,module,exports){
'use strict';
var Row = require('./row.js');

var App = module.exports = React.createClass({displayName: "exports",
  render: function(){
    var rows = [];
    for(var i = 0; i < 24; i++){
      rows.push(React.createElement(Row, null));
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
    return (
      React.createElement("div", {className: "minute"}
      )
    )
  }
})
},{}],4:[function(require,module,exports){
'use strict';
var Minute = require('./minute.js')

var Row = module.exports = React.createClass({displayName: "exports",
  render: function(){
    var minutes = [];
    for(var i = 0; i < 24; i++){
      minutes.push(React.createElement(Minute, null))
    }
    return (
      React.createElement("div", {className: "row"}, "Minutes"
      )
    )
  }
})
},{"./minute.js":3}]},{},[1])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy93YXRjaGlmeS9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIiwianMvYm9keS5qcyIsImpzL2NvbXBvbmVudHMvYXBwLmpzIiwianMvY29tcG9uZW50cy9taW51dGUuanMiLCJqcy9jb21wb25lbnRzL3Jvdy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiJ3VzZSBzdHJpY3QnXG52YXIgQXBwID0gcmVxdWlyZSgnLi9jb21wb25lbnRzL2FwcC5qcycpO1xuXG52YXIgQm9keSA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtkaXNwbGF5TmFtZTogXCJCb2R5XCIsXG4gIHJlbmRlcjogZnVuY3Rpb24oKXtcbiAgICB2YXIgbWVzc2FnZSA9ICdSZWFjdCBoYXMgYmVlbiBzdWNjZXNzZnVsbHkgcnVubmluZyBmb3IgJyArIHRoaXMucHJvcHMudGltZSArICcgc2Vjb25kcy4nO1xuICAgIHJldHVybiAoXG4gICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtpZDogXCJ3cmFwcGVyXCJ9LCBtZXNzYWdlLCBcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChBcHAsIHt0aW1lOiB0aGlzLnByb3BzLnRpbWV9KVxuICAgICAgKVxuICAgIClcbiAgfVxufSk7XG5cbnNldEludGVydmFsKGZ1bmN0aW9uKCl7XG4gIFJlYWN0LnJlbmRlcihcbiAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEJvZHksIHt0aW1lOiBuZXcgRGF0ZSgpfSksXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21vdW50JylcbiAgKTtcbn0sIDUwICk7IiwiJ3VzZSBzdHJpY3QnO1xudmFyIFJvdyA9IHJlcXVpcmUoJy4vcm93LmpzJyk7XG5cbnZhciBBcHAgPSBtb2R1bGUuZXhwb3J0cyA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtkaXNwbGF5TmFtZTogXCJleHBvcnRzXCIsXG4gIHJlbmRlcjogZnVuY3Rpb24oKXtcbiAgICB2YXIgcm93cyA9IFtdO1xuICAgIGZvcih2YXIgaSA9IDA7IGkgPCAyNDsgaSsrKXtcbiAgICAgIHJvd3MucHVzaChSZWFjdC5jcmVhdGVFbGVtZW50KFJvdywgbnVsbCkpO1xuICAgIH1cbiAgICByZXR1cm4oXG4gICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtjbGFzc05hbWU6IFwiYXBwXCJ9LCBcbiAgICAgICAgcm93c1xuICAgICAgKVxuICAgIClcbiAgfVxufSkiLCIndXNlIHN0cmljdCdcbnZhciBNaW51dGUgPSBtb2R1bGUuZXhwb3J0cyA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtkaXNwbGF5TmFtZTogXCJleHBvcnRzXCIsXG4gIHJlbmRlcjogZnVuY3Rpb24oKXtcbiAgICByZXR1cm4gKFxuICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7Y2xhc3NOYW1lOiBcIm1pbnV0ZVwifVxuICAgICAgKVxuICAgIClcbiAgfVxufSkiLCIndXNlIHN0cmljdCc7XG52YXIgTWludXRlID0gcmVxdWlyZSgnLi9taW51dGUuanMnKVxuXG52YXIgUm93ID0gbW9kdWxlLmV4cG9ydHMgPSBSZWFjdC5jcmVhdGVDbGFzcyh7ZGlzcGxheU5hbWU6IFwiZXhwb3J0c1wiLFxuICByZW5kZXI6IGZ1bmN0aW9uKCl7XG4gICAgdmFyIG1pbnV0ZXMgPSBbXTtcbiAgICBmb3IodmFyIGkgPSAwOyBpIDwgMjQ7IGkrKyl7XG4gICAgICBtaW51dGVzLnB1c2goUmVhY3QuY3JlYXRlRWxlbWVudChNaW51dGUsIG51bGwpKVxuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7Y2xhc3NOYW1lOiBcInJvd1wifSwgXCJNaW51dGVzXCJcbiAgICAgIClcbiAgICApXG4gIH1cbn0pIl19
