var words = ["spray", "limit", "elite", "exuberant", "destruction", "present", "happy"];

var longWords = words.filter(function(word){
  return word.length > 6;
});

// Filtered array longWords is ["exuberant", "destruction", "present"]