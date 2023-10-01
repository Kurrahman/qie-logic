function solution(inp, q) {
    let out = []
    let idx = 0
    q.forEach(word => {
        out.push(0)
        for (let i = 0; i < inp.length; i++) {
            if (word == inp[i]){
                out[idx] += 1
                inp.splice(i,1)
                i -= 1
            }
        }
        idx += 1
    })
    return out
}
console.log(solution(['xc', 'dz', 'bbb', 'dz'],['bbb', 'ac', 'dz']))