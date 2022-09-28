Write a function to generate 'n' number of fibonacci series (0,1,1,2,3...) in reverse order .
The output should be a string of fibonacci series in the reverse order upto the given number.

Example
reverseFibo(3)  // => '110'
reverseFibo(10) // => '3421138532110'



function reverseFibo (n) {
  if (n === 1) return '0';
  let [result, prev, cur, next] = [[1, 0], 0, 1, 0];
  while (n > 2) {
    next = prev + cur;
    prev = cur;
    cur = next;
    result.unshift(next);
    n--;
  }
  return result.join``
}

