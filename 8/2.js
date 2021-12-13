f=a=>{
    c=0
    a.map(v=>{
        b=[]
        v=v.split` | `
        w=v[0].split` `.map(x=>[...x].sort())
        h=p=>w.find(x=>x.length==p)
        i=(p,q,r,s)=>w.find(x=>x.length==p&&g(q?x:r,q?r:x,s));
        console.log()
        b[1]=h(2)
        b[3]=i(5,1,b[1])
        b[4]=h(4)
        b[6]=i(6,1,b[1],1)
        b[5]=i(5,0,b[6])
        b[7]=h(3)
        b[8]=h(7)
        b[9]=i(6,1,b[3])
        b[0]=i(6,1,b[5],1)
        b[2]=i(5,0,b[9],1)
        c+=+v[1].split` `.map(x=>[...x].sort()).map(x=>b.map(y=>y.join()).indexOf(x.join())).join``
    })

    return c
}
g=(m,n,o)=>n.every(y=>m.includes(y))^!!o
h=(o,p)=>o.find(x=>x.length==p)
i=(o,p,q,r,s)=>o.find(x=>x.length==p&&g(q?x:r,q?r:x,s));
console.log(f(require('fs').readFileSync('./input.txt', 'utf8').split('\n')))