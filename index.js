function theBeatlesPlay (musicians, instruments){
  var sayings = [];
  for (var i = 0; i < musicians.length; i++) {
    sayings.push(musicians[i] + " plays " + instruments[i]);
  }
  return sayings;
}

function johnLennonFacts () {
  var facts = ["foo","bar"];
  var newFacts = [];
  var i = 0
  while (i < facts.length) {
    newFacts.push(facts[i]+"!!!")
    i++;
  }
  return newFacts;
}
