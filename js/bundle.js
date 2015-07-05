(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';
var App = require('./components/app.js');
var Modal = require('./components/modal.js');

var Body = React.createClass({displayName: "Body",
  render: function(){
    var message = 'React has been successfully running for ' + this.props.time + ' seconds.';
    var a =[React.createElement(Modal, {time: this.props.time})]
    return (
      React.createElement("div", {id: "wrapper", style: {height:'100%'}}, 
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
},{"./components/app.js":2,"./components/modal.js":4}],2:[function(require,module,exports){
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
},{"./row.js":5}],3:[function(require,module,exports){
'use strict'
var Minute = module.exports = React.createClass({displayName: "exports",
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
      React.createElement("div", {className: style})
    );
  }
})
},{}],4:[function(require,module,exports){
'use strict';
var Modal = module.exports = React.createClass({displayName: "exports",
  render: function(){
    return (
      React.createElement("div", {id: "modal"}
      )
    )
  }
})
},{}],5:[function(require,module,exports){
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy93YXRjaGlmeS9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIiwianMvYm9keS5qcyIsImpzL2NvbXBvbmVudHMvYXBwLmpzIiwianMvY29tcG9uZW50cy9taW51dGUuanMiLCJqcy9jb21wb25lbnRzL21vZGFsLmpzIiwianMvY29tcG9uZW50cy9yb3cuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDZkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDZkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIid1c2Ugc3RyaWN0JztcbnZhciBBcHAgPSByZXF1aXJlKCcuL2NvbXBvbmVudHMvYXBwLmpzJyk7XG52YXIgTW9kYWwgPSByZXF1aXJlKCcuL2NvbXBvbmVudHMvbW9kYWwuanMnKTtcblxudmFyIEJvZHkgPSBSZWFjdC5jcmVhdGVDbGFzcyh7ZGlzcGxheU5hbWU6IFwiQm9keVwiLFxuICByZW5kZXI6IGZ1bmN0aW9uKCl7XG4gICAgdmFyIG1lc3NhZ2UgPSAnUmVhY3QgaGFzIGJlZW4gc3VjY2Vzc2Z1bGx5IHJ1bm5pbmcgZm9yICcgKyB0aGlzLnByb3BzLnRpbWUgKyAnIHNlY29uZHMuJztcbiAgICB2YXIgYSA9W1JlYWN0LmNyZWF0ZUVsZW1lbnQoTW9kYWwsIHt0aW1lOiB0aGlzLnByb3BzLnRpbWV9KV1cbiAgICByZXR1cm4gKFxuICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7aWQ6IFwid3JhcHBlclwiLCBzdHlsZToge2hlaWdodDonMTAwJSd9fSwgXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQXBwLCB7dGltZTogdGhpcy5wcm9wcy50aW1lfSlcbiAgICAgIClcbiAgICApXG4gIH1cbn0pO1xuXG5zZXRJbnRlcnZhbChmdW5jdGlvbigpe1xuICBSZWFjdC5yZW5kZXIoXG4gICAgUmVhY3QuY3JlYXRlRWxlbWVudChCb2R5LCB7dGltZTogbmV3IERhdGUoKX0pLFxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtb3VudCcpXG4gICk7XG59LCA1MCApOyIsIid1c2Ugc3RyaWN0JztcbnZhciBSb3cgPSByZXF1aXJlKCcuL3Jvdy5qcycpO1xuXG52YXIgQXBwID0gbW9kdWxlLmV4cG9ydHMgPSBSZWFjdC5jcmVhdGVDbGFzcyh7ZGlzcGxheU5hbWU6IFwiZXhwb3J0c1wiLFxuICByZW5kZXI6IGZ1bmN0aW9uKCl7XG4gICAgdmFyIHJvd3MgPSBbXTtcbiAgICBmb3IodmFyIGkgPSAwOyBpIDwgMjQ7IGkrKyl7XG4gICAgICByb3dzLnB1c2goUmVhY3QuY3JlYXRlRWxlbWVudChSb3csIHtrZXk6IGksIHJvd051bTogaSwgdGltZTogdGhpcy5wcm9wcy50aW1lfSkpO1xuICAgIH1cbiAgICByZXR1cm4oXG4gICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtjbGFzc05hbWU6IFwiYXBwXCJ9LCBcbiAgICAgICAgcm93c1xuICAgICAgKVxuICAgIClcbiAgfVxufSkiLCIndXNlIHN0cmljdCdcbnZhciBNaW51dGUgPSBtb2R1bGUuZXhwb3J0cyA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtkaXNwbGF5TmFtZTogXCJleHBvcnRzXCIsXG4gIHJlbmRlcjogZnVuY3Rpb24oKXtcbiAgICB2YXIgdGltZSA9IHRoaXMucHJvcHMudGltZSwgc3R5bGU7XG4gICAgdmFyIGF0ID0gdGhpcy5wcm9wcy5yb3dOdW0qMzAgKyB0aGlzLnByb3BzLm1pbk51bTtcbiAgICB2YXIgY3QgPSAodGltZS5nZXRIb3VycygpJTEyKSo2MCArIHRpbWUuZ2V0TWludXRlcygpO1xuICAgIGlmKHRpbWUuZ2V0SG91cnMoKSA+PSAxMil7XG4gICAgICBzdHlsZSA9IGF0IDwgY3QgPyAnc2lsdmVyIG1pbnV0ZScgOiAnbWludXRlIGdyYXknOyAgICBcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGUgPSBhdCA+IGN0ID8gJ2JsYWNrIG1pbnV0ZScgOiAnbWludXRlIGdyYXknO1xuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7Y2xhc3NOYW1lOiBzdHlsZX0pXG4gICAgKTtcbiAgfVxufSkiLCIndXNlIHN0cmljdCc7XG52YXIgTW9kYWwgPSBtb2R1bGUuZXhwb3J0cyA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtkaXNwbGF5TmFtZTogXCJleHBvcnRzXCIsXG4gIHJlbmRlcjogZnVuY3Rpb24oKXtcbiAgICByZXR1cm4gKFxuICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7aWQ6IFwibW9kYWxcIn1cbiAgICAgIClcbiAgICApXG4gIH1cbn0pIiwiJ3VzZSBzdHJpY3QnO1xudmFyIE1pbnV0ZSA9IHJlcXVpcmUoJy4vbWludXRlLmpzJylcblxudmFyIFJvdyA9IG1vZHVsZS5leHBvcnRzID0gUmVhY3QuY3JlYXRlQ2xhc3Moe2Rpc3BsYXlOYW1lOiBcImV4cG9ydHNcIixcbiAgcmVuZGVyOiBmdW5jdGlvbigpe1xuICAgIHZhciBtaW51dGVzID0gW107XG4gICAgZm9yKHZhciBpID0gMDsgaSA8IDMwOyBpKyspe1xuICAgICAgbWludXRlcy5wdXNoKFJlYWN0LmNyZWF0ZUVsZW1lbnQoTWludXRlLCB7a2V5OiBpLCBtaW5OdW06IGksIHJvd051bTogdGhpcy5wcm9wcy5yb3dOdW0sIHRpbWU6IHRoaXMucHJvcHMudGltZX0pKVxuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7Y2xhc3NOYW1lOiBcInJvd1wifSwgXG4gICAgICAgIG1pbnV0ZXNcbiAgICAgIClcbiAgICApXG4gIH1cbn0pIl19
