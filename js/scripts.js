function beep(input) {

  var ans = [];
  function range() {
    for (var i = 0; i <= input; i++) {
      ans.push(i);
    }
  };

  function boop() {
    for (var j = 0; j < ans.length; j++) {
      var split = (ans[j].toString()).split('');
      var splitNumsArray = [];
      for (var k = 0; k < split.length; k++) {
        var toNumbers2 = parseInt(split[k]);
        splitNumsArray.push(toNumbers2);
        if (splitNumsArray[k] === 3) {
          ans.splice(j, 1, 'I\'m sorry, Dave. I\'m afraid I can\'t do that.');
        }else if (splitNumsArray[k] === 2) {
          ans.splice(j, 1, 'Boop');
        }else if (splitNumsArray[k] === 1) {
          ans.splice(j, 1, 'Beep');
        }
      };
    };
  };
  range();
  boop();
  return (ans);
};


$(document).ready(function () {
  $('form#formInput').submit(function (event) {
    var userInput = parseInt($('#userInput').val());
    event.preventDefault();
    var result = beep(userInput);
    ($('h4.output')).text(result);
  });
});
