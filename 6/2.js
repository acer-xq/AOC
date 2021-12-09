f=a=>(b=[0,0,0,0,0,0,0],a.split`,`.map(x=>b[x]++),[...Array(256)].map(x=>(b[6]=(x=b.shift())+b[6]||x,b[8]=x+b[8]||x)),eval(b.join`+`))
console.log(f(require('fs').readFileSync('./input.txt', 'utf8')))