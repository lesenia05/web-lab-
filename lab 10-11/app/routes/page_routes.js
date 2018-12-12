var ObjectID = require('mongodb').ObjectID;
var _dirname = 'C:\Users\Lesya\Documents\2 курс ІР\Web-program\lab 10-11';
module.exports = function(app, db) {
  app.get('/', (req, res) => {
    res.sendFile(_dirname + '/admin.html');
  });
  app.get('/admin.html', (req, res) => {
    res.sendFile(_dirname + '/admin.html');
  });
  app.get('/fans.html', (req, res) => {
    res.sendFile(_dirname + '/fans.html');
  });

  app.get('/news.html', (req, res) => {
    res.sendFile(_dirname + '/news.html');
  });
};
