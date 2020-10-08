var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  news = [
    {
      'url': 'https://www.nbcnews.com/politics/politics-news/redfield-voices-alarm-over-influence-trump-s-new-coronavirus-task-n1241221',
      'title': "Redfield voices alarm over influence of Trump's new coronavirus task force adviser",
      'urlToImage': 'https://media3.s-nbcnews.com/j/newscms/2020_40/3415368/200927-robert-redfield-jm-1525_02fddcd6cbeeecc044d2543499354b97.fit-1240w.jpg',
      'digest': "3RjuEomJo2601syZbUdOHA==\n",
      'time': "Today",
      'reason': "Hot"
    },
    {
      'url': 'https://www.politico.com/news/2020/09/28/trump-defense-tax-scandal-422512',
      'title': "Trump tries new line of defense amid tax scandal",
      'source': 'FOX',
      'urlToImage': 'https://static.politico.com/dims4/default/1f1df47/2147483647/resize/1160x/quality/90/?url=https%3A%2F%2Fstatic.politico.com%2Fe2%2F8e%2Fbf052605446b8f07828c68e2eb3e%2F20200929-trumpqs-gty-773.jpg',
      'digest': "3RjuEomJo2601syZbUdOHB==\n",
      'time': "Today",
      'reason': "Recommend"
    }
  ];
  res.json(news);
});

module.exports = router;
