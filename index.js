function theBeatlesPlay (musicians, instruments){
  var sayings = [];
  for (var i = 0; i < musicians.length; i++) {
    musicians.push(musicians[i] + " plays " + instruments[i]);
  }
  return sayings;
}
