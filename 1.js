function solution(s){
    const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
    let out = ''
    for (const char of s) {
        if (numbers.includes(char)){
            out += char
        } else {
            out = char + out
        }
    }
    return out
}

console.log(solution('QUANTUS3'))
console.log(solution('SUTNAUQ3'))