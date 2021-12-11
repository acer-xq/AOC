f=a=>{
    b=[]
    a.map(v=>{
        w=v.split` | `[0].split` `.map(x=>[...x].sort())
        b[1]=h(w,2)
        b[3]=w.find(x=>x.length==5&&g(x,b[1],0))
        //b[3]=i(w,5,1,0,b[1])
        b[4]=h(w,4)
        b[6]=w.find(x=>x.length==6&&g(x,b[1],1))
        b[5]=w.find(x=>x.length==5&&g(b[6],x,0))
        //b[5]=i(w,5,0,0,b[6])
        b[7]=h(w,3)
        b[8]=h(w,7)
        b[9]=w.find(x=>x.length==6&&g(x,b[3],0))
        //b[9]=i(w,6,1,0,b[3])
        b[0]=w.find(x=>x.length==6&&g(x,b[5],1))
        b[2]=w.find(x=>x.length==5&&g(b[9],x,1))
    })

    return b.map(x=>x.join())
}
g=(m,n,o)=>n.every(y=>m.includes(y))^!!o
h=(o,p)=>o.find(x=>x.length==p)
i=(o,p,q,r,s)=>o.find(x=>x.length==p&&q?g(x,s):g(s,x));
console.log(f(require('fs').readFileSync('./test 2.txt', 'utf8').split('\r\n')))