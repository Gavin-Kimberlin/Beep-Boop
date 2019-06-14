$(document).ready(function () {
  $('form#formInput').submit(function (event) {
    event.preventDefault();
    var input = parseInt($('#userInput').val());
    var intoNumber1 = parseInt(input);
    var ans = [];

    function range() {
      for (var i = 0; i <= intoNumber1; i++) {
        ans.push(i);
      }
    };

    var newAns = [];
    function beep() {
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
    beep();
    console.log(ans);
    ($('h4.output')).text(ans);
  });
});
