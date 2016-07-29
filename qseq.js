/*
 * Solution for code golf contest in JavaScript ES6
 * http://codegolf.stackexchange.com/questions/86880/hofstadter-q-sequence/86926#86926
 */

a=(n)=>{return n>2?a(n-a(n-1))+a(n-a(n-2)):1;}

/*
 * Test ...
 */
console.log('n\ta(n)');
for(let i=0; i<=20; ++i)
  console.log(`${i}\t${a(i)}`);
