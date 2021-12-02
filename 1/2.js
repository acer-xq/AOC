f=x=>x.reduce((p,c,i)=>p+=+c<x[i+3],0)
console.log(f(require('fs').readFileSync('./input.txt', 'utf8').split('\r\n')))