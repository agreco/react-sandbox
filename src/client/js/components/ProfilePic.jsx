
var React = require('react/addons'),
    ProfilePic = React.createClass({
        render: function() {
            return (<img src={'https://graph.facebook.com/' + this.props.username + '/picture'} />);
        }
    });

module.exports = ProfilePic;
