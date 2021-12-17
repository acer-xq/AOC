f=a=>{
    r=[]
    b=a[0].length
    a=[...a.join``]
    a.map((x,y)=>{
        m = x < ((a[y-1]&&y%b>0) ? a[y-1] : 10)
        n = x < ((a[y+1]&&(y%b<b-1)) ? a[y+1] : 10)
        n = x < ((a[y+1]&&(y%b<b-1)) ? a[y+1] : 10)
        o = x < (a[y-b]||10)
        p = x < (a[y+b]||10)
        q = ((a[y-1]&&y%b>0) ? a[y-1] : 10) + ((a[y+1]&&(y%b<b-1)) ? a[y+1] : 10) + (a[y-b]||10) + (a[y+b]||10)

        r.push((m && n && o && p)?-~x:0)
    })

    return eval(r.join`+`)
}
console.log(f(require('fs').readFileSync('./input.txt', 'utf8').split('\r\n')))