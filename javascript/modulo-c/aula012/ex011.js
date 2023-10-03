var idade = 15
console.log(`Sua idade é ${idade} anos`)
if (idade < 16) {
    console.log('Você Não vota!')
} else {
    if (idade < 18) {
        console.log('Seu voto é opcional!') 
    } else {
        console.log('Você vota!')
    }
}