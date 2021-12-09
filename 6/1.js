f=a=>(b=a.split`,`,[...Array(80)].map(_=>b=b.flatMap(x=>x?--x:[6,8])),b.length)
console.log(f(require('fs').readFileSync('./input.txt', 'utf8')))