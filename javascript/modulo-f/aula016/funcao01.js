function parimpar(n) {
    if (n%2 == 0) {
        return 'Par'
    } else {
        return 'Ímpar'
    } 
}

console.log(`2 é ${parimpar(2)}`)
console.log(`5 é ${parimpar(5)}`)
console.log(`223 é ${parimpar(223)}`)
