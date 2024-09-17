// Strong arm solution, initial thought process, can improve
/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
  let romanNum = "";
  while (num >= 1000) {
    let numberOfM = Math.floor(num / 1000);
    num = num % (numberOfM * 1000);
    while (numberOfM > 0) {
      romanNum += "M";
      numberOfM -= 1;
    }
  }

  while (num >= 100) {
    if (num >= 900) {
      romanNum += "CM";
      num -= 900;
    } else if (num >= 500) {
      romanNum += "D";
      num -= 500;
    } else if (num >= 400) {
      romanNum += "CD";
      num -= 400;
    } else {
      let numberOfC = Math.floor(num / 100);
      num = num % (numberOfC * 100);
      while (numberOfC > 0) {
        romanNum += "C";
        numberOfC -= 1;
      }
    }
  }

  while (num >= 10) {
    if (num >= 90) {
      romanNum += "XC";
      num -= 90;
    } else if (num >= 50) {
      romanNum += "L";
      num -= 50;
    } else if (num >= 40) {
      romanNum += "XL";
      num -= 40;
    } else {
      let numberOfX = Math.floor(num / 10);
      num = num % (numberOfX * 10);
      while (numberOfX > 0) {
        romanNum += "X";
        numberOfX -= 1;
      }
    }
  }

  while (num >= 1) {
    if (num >= 9) {
      romanNum += "IX";
      num -= 9;
    } else if (num >= 5) {
      romanNum += "V";
      num -= 5;
    } else if (num === 4) {
      romanNum += "IV";
      num -= 4;
    } else {
      let numberOfI = Math.floor(num / 1);
      num = num % numberOfI;
      while (numberOfI > 0) {
        romanNum += "I";
        numberOfI -= 1;
      }
    }
  }
  return romanNum;
};
