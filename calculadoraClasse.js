


class calculadora {
    numberOne
    numberTwo

    soma() {
        console.log(this.numberOne + this.numberTwo)
    }
    subtracao() {
        console.log(this.numberOne - this.numberTwo)
    }
    multiplicao() {
        console.log(this.numberOne * this.numberTwo)
    }
    divisao() {
        console.log(this.numberOne / this.numberTwo)
    }

}


let calculadoraSoma = new calculadora();
console.log("soma")
calculadoraSoma.numberOne = parseInt(prompt("Digite um número interio"))
calculadoraSoma.numberTwo = parseInt(prompt("Digite um número interio"))
calculadoraSoma.soma()

let calculadoraSub = new calculadora();
console.log("subtração")
calculadoraSub.numberOne = parseInt(prompt("Digite um número interio"))
calculadoraSub.numberTwo = parseInt(prompt("Digite um número interio"))
calculadoraSub.subtracao()

let calculadoraMult = new calculadora();
console.log("Multiplicação")
calculadoraMult.numberOne = parseInt(prompt("Digite um número interio"))
calculadoraMult.numberTwo = parseInt(prompt("Digite um número interio"))
calculadoraMult.multiplicao()

let calculadoraDiv = new calculadora();
console.log("Divisão")
calculadoraDiv.numberOne = parseInt(prompt("Digite um número interio"))
calculadoraDiv.numberTwo = parseInt(prompt("Digite um número interio"))
calculadoraDiv.divisao()





