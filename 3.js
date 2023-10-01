function solution(s){
    let track = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

    for (let i = 0; i < s.length; i++) {
        let n = parseInt(s[i])
        track[n] += 1
    }

    for (let index = 0; index < track.length; index++) {
        if (track[index] == 1) return index
    }
}

console.log(solution('76529752'))
console.log(solution('76529752706529752'))