f=a=>[...Array(0|(a=a.split`,`).sort((x,y)=>y-x)[0])].map((_,x)=>a.reduce((y,z)=>y+(b=Math.abs(z-x))/2*-~b,0)).sort((x,y)=>x-y)[0]
console.log(f(require('fs').readFileSync('./test.txt', 'utf8')))