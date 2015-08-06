
var React = require('react/addons'),
    $ = require('jquery'),
    ProfilePic = require(__dirname + '/ProfilePic.jsx'),
    ProfileLink = require(__dirname + '/ProfileLink.jsx'),
    Avatar = React.createClass({
        render: function() {
            return (
                <div>
                    <ProfilePic username={this.props.username} />
                    <ProfileLink username={this.props.username} />
                </div>
            );
        }
    });

module.exports = Avatar;
