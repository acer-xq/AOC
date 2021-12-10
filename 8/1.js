f=a=>{
    b=0
    c=[0,0,0,0]
    a.map(y=>{
        x=y.split`|`[1]+' '
        c[0]+=x.split(/ \w{2}( |$)/).length-1
        c[1]+=x.split(/ \w{3}( |$)/).length-1
        console.log(x.split(/ \w{2}( |$)/))
        c[2]+=x.split(/ \w{4}( |$)/).length-1
        c[3]+=x.split(/ \w{7}( |$)/).length-1
        console.log(c)
    })
    return b
}
console.log(f(require('fs').readFileSync('./test.txt', 'utf8').split('\n')))