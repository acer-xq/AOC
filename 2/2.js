f=(a)=>(x=y=z=0,a.map(s=>(v=s[0],w=+s.slice(-1),x+=(t=w*(v=='f')),y+=z*t,z+=v<'e'?w:-w*(v>'t'))),x*y)
console.log(f(require('fs').readFileSync('./input.txt', 'utf8').split('\r\n')))