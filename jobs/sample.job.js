var current_valuation = 0;
var current_karma = 0;

setInterval(function() {
  var last_valuation = current_valuation;
  var last_karma = current_karma;
  var current_valuation = Math.floor(Math.random() * 10);
  var current_karma = Math.floor(Math.random() * 200000);

  send_event('valuation', {current: current_valuation, last: last_valuation});
  send_event('karma', {current: current_karma, last: last_karma});
  send_event('synergy', {value: Math.floor(Math.random() * 100)});

  // p2pu
  send_event('courses_with_more_than_5_signups', {current: 37});
  send_event('old_courses_with_more_than_5_signups', {current: 314});
  send_event('old_courses_with_more_than_10_edits', {current: 52});
  send_event('courses_with_more_than_10_edits', {current: 52});

}, 2 * 1000);

/*

select 


*/