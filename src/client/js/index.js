/** @jsx React.DOM */

// Example from: https://facebook.github.io/react/docs/multiple-components.html

var ReactDOM = require('react-dom'),
    Avatar = require(__dirname + '/components/Avatar.js');

ReactDOM.render(<Avatar username="agreco1379" />, document.getElementById('content'));