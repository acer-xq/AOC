f=(a,i=0)=>eval(`for(b=c=[...a];b[1]|c[1];)b=g(b,i,x=>x>-1,c=g(c,i++,x=>x<0));('0b'+b)*('0b'+c)`)
g=(a,b,f)=>a[1]?a.filter(c=>c[b]^f(a.reduce((d,e)=>d+2*e[b]-1,0))):a
console.log(f(require('fs').readFileSync('./input.txt', 'utf8').split('\r\n')))