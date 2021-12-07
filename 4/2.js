f=a=>(b=a.shift(),a=a.map((_,y)=>[1,2,3,4,5].map(z=>a[y+z]).join` `.split(/\s+/)).filter((_,y)=>y%6==0),b.split`,`.map(d=>a=a.map(x=>x.map(y=>d-y?+y:~y)).filter(x=>!x.some((_,z)=>z%5<1&x.slice(z,z+5,r=x.reduce((y,z)=>y+=z*=z>0,0)*d).every(v=>v<0)|z<5&x.every((v,w)=>w%5!=z%5|v<0)))),r)
console.log(f(require('fs').readFileSync('./input.txt', 'utf8').split('\r\n')))
