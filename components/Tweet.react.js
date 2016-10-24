var React = require('react');

module.exports = Tweet = React.createClass({
    render: function () {
        var tweet = this.props.tweet;
        return (
            <li className={"twtr-tweet" + (tweet.active ? ' active' : '')}>
                <a href={"http://www.twitter.com/" + tweet.screenname} className="twtr-img"><img src={tweet.avatar} className="avatar"/></a>
                <div className="twtr-userInfo">
                    <a href={"http://www.twitter.com/" + tweet.screenname} className="twtr-user">{tweet.author}</a>
                    <span className="twtr-name">@{tweet.screenname}</span>
                </div>
                <div className="twtr-content">{tweet.body}</div>
            </li>
        )
    }
});