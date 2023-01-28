var num1=Math.ceil(Math.random()*10)
var num2=Math.ceil(Math.random()*10)
var num3=Math.ceil(Math.random()*10)
var biggerNum=0

if (num1>num2 && num1>num3) {
    biggerNum=num1
} else if(num2 > num1 && num2>num3 ){
    biggerNum=num2
} else {
    biggerNum=num3
}

console.log(num1,num2,num3,biggerNum) 