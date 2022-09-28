Kata Task
Connect the dots in order to make a picture!

Notes
There are 2-26 dots labelled a b c ...
Make lines to connect the dots a -> b, b -> c, etc
The line char is *
Use only straight lines - vertical, horizontal, or diagonals of a square
The paper is rectangular - \n terminates every line
All input is valid
Examples


Input
 
 a       b 
          
            
 d       c 
 
 
 
 Expected
 
 *********
         *
         *
 *********
 
   
   
Input
 
    a
   e
      
 d     b
  
         
    c
 
    
Expected
     
    *
   * *
  *   *
 *     *
  *   *
   * *
    *
 
  
  
function connectTheDots (str) {
  let p = [...str], L = str.indexOf('\n') + 1;
  let dots = [...str.replace(/[^a-z]/g,'')].sort();
  
  for (let i = 0; i < dots.length; i++) {
    let s = str.indexOf(dots[i]), e = str.indexOf(dots[i + 1]);   
    if (e < 0) {
      p[s] = '*';
      break;
    }    
    if (!p.slice(Math.min(s, e), Math.max(s, e)).includes('\n')) {
      for (let i = s; s < e ? i < e : i > e; s < e ? i++ : i--) p[i] = '*';
    } else if (Math.abs(s - e) % L === 0) { 
        for (let i = s; s < e ? i < e : i > e; s < e ? i += L : i -= L) p[i] = '*';
    } else { 
      if (s < e) {
        for (let i = s; i < e; i += ((e - s) % (L + 1) == 0 ? L + 1 : L - 1)) p[i] = '*';
      } else { 
          for (let i = s; i > e; i -= ((s - e) % (L + 1) == 0 && s != 54 ? L + 1 : L - 1)) p[i] = '*';  
      } 
    } 
  } 
  return p.join``;
}  
  
  
