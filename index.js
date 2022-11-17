// Import stylesheets
import './style.css';

function reverseLetterOfWords() {
  var str = 'I evol uoy os !hcum';
  var strArr = str.split(' ');
  var finalStr = '';

  strArr.forEach((item, indx, srcArr) => {
    for (var i = item.length; i >= 0; i--) {
      finalStr = finalStr + item.charAt(i);
    }
    finalStr = finalStr + ' ';
  });

  console.log(finalStr);
}

reverseLetterOfWords();
