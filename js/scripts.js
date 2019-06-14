$(document).ready(function () {
  $('form#formInput').submit(function (event) {
    event.preventDefault();
    var input = $('#userInput').val();
    function range() {
      var ans = [];
      for (var i = 0; i <= parseInt(input); i++) {
        ans.push(i);
        console.log(ans);
      }
    };
    function beep() {
      var split = input.split('');
      for (var i = 0; i < split.length; i++) {
        var toNumber = parseInt(split[i]);
        console.log(toNumber);
      }
    };
    range();
    beep();
  });
});
