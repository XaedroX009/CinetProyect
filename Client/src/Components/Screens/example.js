let counter = function (arr, number) {
  let count = 0;
  for (i = 0; i < arr.lenght; i++) {
    if (arr[i] == number) {
      count = count + 1;
    }
  }
  return count;
};
