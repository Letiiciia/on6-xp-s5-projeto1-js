console.log('--------------------------------------')
console.log('     Projeto Carrinho de Compras     ')
console.log('--------------------------------------')

const db = require('./database')

//1
const produtos = db.produtos // lista do jeito que esta
const produtosEmOrdem = produtos.sort((a, b) => a.preco - b.preco) //organiza em ordem crscente com o método sort

console.table(produtosEmOrdem) // lista em ordem crscente no console

//2
const readline = require('readline-sync')


// lista vazia
const listaDeCompras = []

console.log(listaDeCompras)



//4
function comprar(){
    let idProduto = parseFloat(readline.question('Qual produto deseja? '))
    while(idProduto <= 0 || idProduto >= 9 ){
        idProduto = parseFloat(readline.question("Digite novamente o Id "));
      }
    
    let quantidadeDeProduto = parseFloat(readline.question('Quantos itens? '))
    while(quantidadeDeProduto <= 0){
        quantidadeDeProduto = parseFloat(readline.question("Digite novamente a quantidade "))
    }

    const produtoAdquirido = produtos.find((item) => item.id === idProduto)

    const produtoAdicionado = {...produtoAdquirido, quantidade: quantidadeDeProduto}
    
    listaDeCompras.push(produtoAdicionado)
}




let continuarCompra = "S"
while (continuarCompra === "S") {
    comprar()
    continuarCompra = readline.question('Deseja continuar a compra? (S/N) ')
}
console.table(listaDeCompras)

let cupomDesconto = parseFloat(readline.question('Voce tem cupom de desconto? '))
while(cupomDesconto > 15){
 cupomDesconto = parseFloat(readline.question('Voce tem cupom de desconto? '))
}

class Pedido {
constructor(listaDeCompras, valorDoCupom , dataCompra = new Date() ){
this.listaDeCompras = listaDeCompras
this.valorDoCupom = valorDoCupom
this.dataCompra = dataCompra
this.valorSubtotal = 0
this.TotalItens = 0
this.valorDesconto = 0
this.valorFinal = 0
}
somaItens(){
    this.TotalItens = this.listaDeCompras.reduce((acumulador,produto) => acumulador + produto.quantidade, 0)
}
calculaSubTotal(){
    this.valorSubtotal = this.listaDeCompras.reduce((acumulador,produto) => acumulador + produto.quantidade * produto.preco, 0)
}
calcularComCupom(){
    this.valorDesconto = this.valorSubtotal * (this.valorDoCupom/100)
}
calcularValorFinal(){
    this.valorFinal = this.valorSubtotal - this.valorDesconto
}
}

const pedido1 = new Pedido(listaDeCompras, cupomDesconto)
pedido1.somaItens()
pedido1.calculaSubTotal()
pedido1.calcularComCupom()
pedido1.calcularValorFinal()


console.log(`Quantidade de itens: ${pedido1.TotalItens}`)
console.log(`Valor total: ${pedido1.valorSubtotal.toFixed(2)}`)
console.log(`Valor do desconto: ${pedido1.valorDesconto.toFixed(2)}`)
console.log(`Valor final com desconto: ${pedido1.valorFinal.toFixed(2)}`)
console.log(`Data da compra: ${pedido1.dataCompra}`)




//const listaWhile = []
//const soma = quantidadeDeProduto * produtoAdquirido.preco
//console.log(soma)











//5
function calculaDesconto(valor, desconto) {
    if (descontoProduto <= 15) {
        return
    }
}


//const descontoProduto = parseFloat(readline.question('Possui cupom de desconto? '))