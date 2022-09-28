Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid.
The function should return true if the string is valid, and false if it's invalid.

Examples
"()"              =>  true
")(()))"          =>  false
"("               =>  false
"(())((()())())"  =>  true
Constraints
0 <= input.length <= 100




function validParentheses (parentheses) {
  if (parentheses.length === 1) return false;
  let counter = ~~(parentheses.length / 2);
  while (counter) {
    parentheses = parentheses.replace(/\(\)/,'');
    counter--;
  }
  return parentheses.length === 42 - 42;
}
