function solution(s){
    const words = s.split(' ')
    let max = 0
    let out = ''
    words.forEach(word => {
        if (max < word.length){
            out = word
            max = word.length
        }
    })
    return `${out}: ${max} karakter`
}

console.log(solution("Saya sangat senang mengerjakan soal algoritma dari PT. Quantus Telematika"))
console.log(solution("Diberikan contoh sebuah kalimat, silahkan cari kata terpanjang dari kalimat tersebut, jika ada kata dengan panjang yang sama silahkan ambil salah satu"))
console.log(solution("Kerjakan dengan menggunakan bahasa pemrograman javascript"))