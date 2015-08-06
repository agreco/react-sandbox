/** @jsx React.DOM */

// Example from: https://facebook.github.io/react/docs/multiple-components.html

var React = require('react'),
    Avatar = require(__dirname + '/components/Avatar.jsx');

React.render(<Avatar username="agreco1379" />, document.getElementById('content'));
