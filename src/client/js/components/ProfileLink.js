
var React = require('react'),
    ProfileLink = React.createClass({
        render: function() {
            return (
                <a href={'https://www.facebook.com/' + this.props.username}>
                    {this.props.username}
                </a>
            );
        }
    });

module.exports = ProfileLink;