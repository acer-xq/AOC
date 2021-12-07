f=a=>{
    r=[]
    a=a.map(x=>x.split` -> `.map(y=>y.split`,`))
    a.map(x=>{
        b=[Math.sign(x[1][0]-x[0][0]),Math.sign(x[1][1]-x[0][1])]
        c=d=i=0
        while(''+[c,d]!=''+x[1]) {
            c=i*b[0]- -x[0][0];
            d=i++*b[1]- -x[0][1];
            r[c]=r[c]?r[c]:[];
            r[c][d]=-~r[c][d];
        }
    })

    R(r)

    return r.flat().filter(x=>x>1).length
}
R=A1=>{
    T1=''
    for (i=0;i<1000;i++){
        for (j=0;j<1000;j++){
            T1+=A1[j]?A1[j][i]?A1[j][i]:'.':'.'
        }
        T1+='\n'
    }
    require('fs').writeFileSync('./out.txt', T1, 'utf8')
}
console.log(f(require('fs').readFileSync('./input.txt', 'utf8').split('\r\n')))