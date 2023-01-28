function loto(num=49) {
    return Math.ceil((Math.random())*num) 
}

var lotoNums= []

for (let i = 0; i < 6; i++) {
    lotoNums[i]=loto()

}

console.log(lotoNums)

