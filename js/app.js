let valorTotal
limpar();

function adicionar() {

    if (document.getElementById('quantidade').value > 0) {
        //recuperar valores do produto
        let produto = document.getElementById('produto').value;
        let nomeProduto = produto.split(' -')[0];
        let valorUnitario = produto.split('R$')[1];
        let quantidade = document.getElementById('quantidade').value;

        //calcular preço
        let preco = quantidade * valorUnitario;

        //adicionar ao carrinho
        let carrinho = document.getElementById('lista-produtos');    
        carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos" id="lista-produtos">
        <section class="carrinho__produtos__produto">
        <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${preco}</span>
        </section>`;

        //calcular valor total
        valorTotal += preco;
        let campoTotal = document.getElementById('valor-total');
        campoTotal.textContent = `R$ ${valorTotal}`;

        //limpar campo quantidade
        document.getElementById('quantidade').value = '';
    } else {
        alert('Favor escolher a quantidade do produto');
    }




}

function limpar() {
    valorTotal = 0;
    document.getElementById('lista-produtos').innerHTML = 'Nenhum';
    document.getElementById('valor-total').innerHTML = 'R$ 0';
}
