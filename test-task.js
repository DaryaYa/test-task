// task 1
const createSecretHolder = (secret) => {
    let mySecret = secret;
    return {
      getSecret: function () {
        return mySecret;
      },
      setSecret: function (secret) {
        mySecret = secret;
      }
    };
  };
  let obj = createSecretHolder(5);
  console.log(obj.getSecret());
  obj.setSecret(2);
  console.log(obj.getSecret());
  
  // task 2
  const countNum = (number) => {
    return number
      .toString(2)
      .split("")
      .reduce((acc, i) => Number(acc) + Number(i));
  };
  
  function compare(a, b) {
    if (countNum(a) < countNum(b)) {
      return -1;
    }
    if (countNum(a) > countNum(b)) {
      return 1;
    } else if (countNum(a) === countNum(b)) return a > b ? 1 : -1;
  }
  const sortArr = (a) => {
    return a.sort(compare);
  };
  let arr = [12, 7, 6, 15, 8, 10];
  console.log(sortArr(arr));
  
  // task 3
  let obj1 = { Java: 10, Ruby: 80, Python: 65 }; //["Ruby", "Python"]
  let obj2 = { Hindi: 60, Dutch: 93, Greek: 71 }; //["Dutch", "Greek", "Hindi"]
  let obj3 = { "C++": 50, ASM: 10, Haskell: 20 }; //[]
  
  let sortedArr = (arr) => {
    return Object.entries(arr)
      .filter((el) => el[1] >= 60)
      .sort((a, b) => {
        return b[1] > a[1] ? 1 : -1;
      })
      .map((elem) => elem[0]);
  };
  console.log(sortedArr(obj1));
  console.log(sortedArr(obj2));
  console.log(sortedArr(obj3));
  
  // task 4
  
  for (var i = 0; i < 5; i++) {
    setTimeout(
      (function (i_local) {
        return function () {
          console.log(i_local);
        };
      })(i),
      1000
    );
  }