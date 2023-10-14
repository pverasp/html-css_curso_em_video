let num = [5,4,3,9,1]
console.log(`Minha variável é ${num}`)
console.log(num[1])
console.log(num)
let pos = num.indexOf(1)
if (pos == -1){
    console.log(`O valor não foi encontrado!`)
} else {
    console.log(`O valor 1 está no posição ${pos}`)
}
