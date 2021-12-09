f=a=>[...Array(0|(a=a.split`,`).sort((x,y)=>y-x)[0])].map((_,x)=>a.reduce((y,z)=>y- -Math.abs(z-x),0)).sort((x,y)=>x-y)[0]
console.log(f(require('fs').readFileSync('./input.txt', 'utf8')))