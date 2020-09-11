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




let continuarCompra = "S"
while (continuarCompra === "S") {
    const idProduto = parseFloat(readline.question('Qual produto deseja? '))
    const quantidadeDeProduto = parseFloat(readline.question('Quantos itens? '))
    const produtoAdquirido = produtos.find((item) => item.id === idProduto)
    listaDeCompras.push(produtoAdquirido)
    continuarCompra = readline.question('Deseja continuar a compra? (S/N) ')
}
console.table(listaDeCompras)
const listaWhile = []
const soma = quantidadeDeProduto * produtoAdquirido.preco

console.log(soma)











//5
function calculaDesconto(valor, desconto) {
    if (descontoProduto <= 15) {
        return
    }
}


//const descontoProduto = parseFloat(readline.question('Possui cupom de desconto? '))