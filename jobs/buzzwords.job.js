var buzzwords = ['Philipp', 'Bekka', 'Vanessa', 'Dirk', 'Nadeem', 'Erika', 'Jane', 'Delia', 'Anders'];
var buzzword_counts = {};

setInterval(function() {
  var random_buzzword = buzzwords[Math.floor(Math.random() * buzzwords.length)];
  var value = buzzword_counts[random_buzzword] && buzzword_counts[random_buzzword].value || 0;
  buzzword_counts[random_buzzword] = {
    label: random_buzzword,
    value: (value + 1) % 30
  };
  var data = [];
  for (var i in buzzword_counts) {
    data.push(buzzword_counts[i]);
  }
  send_event('buzzwords', { items: data });
}, 2 * 1000);
