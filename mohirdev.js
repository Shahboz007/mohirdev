//1
let a, b, c, d;
a = 1;
b = 2;
c = 3;

if (a <= 0 || b <= 0 || c <= 0) console.log(0);

//2
const hafta = 1;
switch (hafta) {
  case 1:
    console.log("Dushanba");
    break;
  case 2:
    console.log("Seshanba");
    break;
  case 3:
    console.log("Chorshanba");
    break;
  case 4:
    console.log("Payshanba");
    break;
  case 5:
    console.log("Juma");
    break;
  case 6:
    console.log("Shanba");
    break;
  case 7:
    console.log("Yakshanba");
    break;
  default:
    console.log("none");
}

//3
const year = 2024;
console.log((year % 4 == 0 && year % 100 != 0) || year % 400 == 0);

//4
const length = a.toString().length;
switch (length) {
  case 1:
    return 1;
  case 2:
    return 2;
  case 3:
    return 3;
  default:
    null;
}

// 5
console.log(a > 0 && b > 0 && c > 0 && d > 0);

// 6
let summ = 0;
for (i = 0; i <= a; i++) {
  summ += i;
}
console.log(summ);

// 7
function checkPerfectNumber(a) {
  let perfectSumm = 0;

  for (let i = 1; i < a; i++) {
    if (a % i === 0) {
      perfectSumm += i;
    }
  }

  return perfectSumm === a;
}

console.log(checkPerfectNumber(a));

// 8
let n = 123;
console.log(n.toString().length);

// 9
function checkPalindrome(num) {
  num = num.toString();

  let isPalindrome = true;
  for (let i = 0; i < num.length / 2; i++) {
    if (num[i] !== num[num.length - 1 - i]) {
      isPalindrome = false;
      break;
    }
  }

  return isPalindrome;
}
n = 123;
console.log(checkPalindrome(n));

// 10
n = 21;
function handleSumm(a) {
  let val = a.toString().length;
  let summ = 0;

  while (val--) {
    summ += parseFloat(a.toString()[val]);
  }

  return summ;
}
console.log(handleSumm(n));

// 11
function reversArrayItems(arr) {
  let len = arr.length;
  const newArr = [];

  while (len--) {
    newArr.push(arr[len]);
  }

  return newArr;
}

console.log(reversArrayItems([1, 2, 3, 4, 5]));

// 12
function getFindedItemCountFromArr(arr = [], item) {
  let count = 0;
  for (i = 0; i < arr.length; i++) {
    if (arr[i] === item) count++;
  }

  return count;
}

n = 2;
console.log(getFindedItemCountFromArr([1, 2, 3, 1, 2], n));

//13
function getTwoArrItemSumm(arr = [], a) {
  arr.forEach((item) => {
    const val = a - item;
    const res = arr.find((inItem) => inItem === val);
    if (res) console.log(res, item);
  });
}
getTwoArrItemSumm([1, 2, 4, 5], 3);

//14
const handleSortArray = (arr) => arr.sort((a, b) => a - b);
console.log(handleSortArray([1, 43, 12, 56, 2]));

// 15
const findMaxItemArr = (arr = []) => handleSortArray(arr)[arr.length - 2];
console.log(findMaxItemArr([1, 3, 5, 74, 23]));
