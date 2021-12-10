f=a=>{
    b=[]
    a.map(v=>{
        w=v.split` | `[0].split` `.map(x=>[...x].sort())
        //r[1]=w.find(x=>x.length==2)
        b[1]=h(w,2)
        b[3]=w.find(x=>x.length==5&&g(x,b[1]))
        b[4]=h(w,4)
        b[6]=w.find(x=>x.length==6&&!g(x,b[1]))
        b[5]=w.find(x=>x.length==5&&g(b[6],x))
        b[7]=h(w,3)
        b[8]=h(w,7)
        b[9]=w.find(x=>x.length==6&&g(x,b[3]))
        b[0]=w.find(x=>x.length==6&&!g(x,b[5]))
        b[2]=w.find(x=>x.length==5&&!g(b[9],x))
    })

    return b.map(x=>x.join())
}
g=(m,n)=>n.every(y=>m.includes(y))
h=(o,p)=>o.find(x=>x.length==p)
i=(o,p,q,r,s)=>o.find(x=>x.length==p&&q?)
console.log(f(require('fs').readFileSync('./test 2.txt', 'utf8').split('\r\n')))