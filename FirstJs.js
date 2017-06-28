var box = [3,4,5,9,10,13,15,20];
  function checkPrime (num) {
    for (var i=2; i<=num/2; i++) {
      var div = num % i;
      if (div === 0) {
        return false;
      }
}
return true;
}
