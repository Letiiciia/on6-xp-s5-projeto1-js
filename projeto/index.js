console.log('--------------------------------------')
console.log('     Projeto Carrinho de Compras     ')
console.log('--------------------------------------')

const db = require('./database')
const { produtos } = require('./database')
const produto = db.produtos
produtos.sort((a,b) => b.peco - a.preco)
console.table(produtos)