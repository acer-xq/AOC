f=a=>(b=0,a.map(x=>[2,3,4,7].map(y=>b+=~-(x.split`|`[1]+' ').split(RegExp(` \\w{${y}}(?= )`)).length)),b)
console.log(f(require('fs').readFileSync('./input.txt', 'utf8').split('\r\n')))