$(document).ready(function () {
  $('form#formInput').submit(function (event) {
    event.preventDefault();
    var input = parseInt($('#userInput').val());
    var intoNumber1 = parseInt(input);
    var ans = [];
    function range() {
      for (var i = 0; i <= intoNumber1; i++) {
        ans.push(i);
        console.log(ans);
      }
    };

    var newAns = [];
    function beep() {
      for (var j = 0; j < ans.length; j++) {
        var split = (ans[j].toString()).split('');
        console.log(split);
        var splitNumsArray = [];
        for (var k = 0; k < split.length; k++) {
          var toNumbers2 = parseInt(split[k]);
          console.log(toNumbers2);
          splitNumsArray.push(toNumbers2);
          console.log(splitNumsArray);
          if (splitNumsArray[k] === 3) {
            ans.splice(j, 1, 'I\'m sorry, Dave. I\'m afraid I can\'t do that.')
            console.log(ans);
          };
        };
      };
    };

    range();
    beep();
  });
});
