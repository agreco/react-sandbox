
var React = require('react'),
    ProfilePic = require(__dirname + '/ProfilePic.js'),
    ProfileLink = require(__dirname + '/ProfileLink.js'),
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
