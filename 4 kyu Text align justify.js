Your task in this Kata is to emulate text justification in monospace font. You will be given a single-lined text and the expected justification width.
The longest word will never be greater than this width.

Here are the rules:

Use spaces to fill in the gaps between words.
Each line should contain as many words as possible.
Use '\n' to separate lines.
Gap between words can't differ by more than one space.
Lines should end with a word not a space.
'\n' is not included in the length of a line.
Large gaps go first, then smaller ones ('Lorem--ipsum--dolor--sit-amet,' (2, 2, 2, 1 spaces)).
Last line should not be justified, use only one space between words.
Last line should not contain '\n'
Strings with one word do not need gaps ('somelongword\n').
Also you can always take a look at how justification works in your text editor or directly in HTML (css: text-align: justify).
Have fun :)



function justify (text, width) {
  let arr = text.split(' '), result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(row(arr.slice(i), width));
    i += result[result.length - 1].length - 1;
  }
  return result.map((e, i) => i == result.length - 1 ? e.join` ` : editRow(e, width)).join('\n');
}

function row (arr, n) {
  let result = [];
  for (let i of arr) {
    if (i.length > n) break;
    result.push(i);
    n -= i.length + 1;
  }
  return result;
}

function editRow (arr, n) {
  let space = ~~((n - arr.join('').length) / (arr.length - 1)), result = arr[0];
  let rem = (n - arr.join('').length) % (arr.length - 1);
  for (let i = 1; i < arr.length; i++) {
    result = result + ' '.repeat(rem < 1 ? space : space + 1) + arr[i];
    rem--;
  }
  return result;
}
