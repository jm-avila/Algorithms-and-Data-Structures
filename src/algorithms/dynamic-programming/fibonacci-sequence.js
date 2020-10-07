// O(2^N)
function fib(n) {
  if (n <= 2) return 1;
  return fib(n - 1) + fib(n - 2);
}

// O(N)
function memoFib(n, memo = { 0: undefined, 1: 1, 2: 1 }) {
  if (memo[n]) return memo[n];
  memo[n] = memoFib(n - 1, memo) + memoFib(n - 2, memo);
  return memo[n];
}

function tabulatedFib(n) {
  if (n <= 2) return 1;
  const fibNums = [, 1, 1];
  for (let i = 3; i <= n; i++) {
    fibNums[i] = fibNums[i - 1] + fibNums[i - 2];
  }
  return fibNums[n];
}

//console.log(tabulatedFib(10000000));
//console.log(memoFib(7000));
//console.log(fib(45));
