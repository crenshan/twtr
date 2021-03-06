var JSX = require('node-jsx').install();
var React = require('react');
var ReactDOMServer = require('react-dom/server');
var TweetsApp = React.createFactory(require('./components/TweetsApp.react'));
var Tweet = require('./models/Tweet');

module.exports = {

    index: function(req, res) {
        Tweet.getTweets(0,0, function(tweets, pages) {

            var markup = ReactDOMServer.renderToString(
                TweetsApp({
                    tweets: tweets
                })
            );

            res.render('home', {
                markup: markup,
                state: JSON.stringify(tweets)
            });

        });
    },

    page: function(req, res) {
        Tweet.getTweets(req.params.page, req.params.skip, function(tweets) {
            res.send(tweets);
        });
    }

}
