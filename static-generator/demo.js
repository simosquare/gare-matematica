const ejs = require('ejs');
const fs = require('fs');
const articles = [
  {
    title: 'bella',
    image: 'http://tuttoin1.it/wp-content/uploads/2015/10/atomo-752x440.jpg',
    text: 'dai dai dai dai',
    lastUpdateDate: '3 ore'
  },
  {
    title: 'si volaaaaa',
    image: 'http://tuttoin1.it/wp-content/uploads/2015/10/atomo-752x440.jpg',
    text: 'ti scuoio...',
    lastUpdateDate: '3 ore'
  }
];
const html = ejs.render(fs.readFileSync('./index.html', { encoding: 'utf8' }), { articles: articles });
fs.writeFileSync('./index2.html', html, { encoding: 'utf8' });
