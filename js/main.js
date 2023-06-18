var itens = [];

document.querySelector('input[type=submit]')
.addEventListener('click', ()=>{
  var nomeProduto = document.querySelector('input[name=nome-produto]');
  var valorProduto = document.querySelector('input[name=valor-produto]');

  itens.push({
    nome: nomeProduto.value,
    valor: valorProduto.value
  });

  var listaProdutos = document.querySelector('.lista-produtos');
  var soma = 0;

  listaProdutos.innerHTML = ""

  itens.map(function(val){
    soma+=parseFloat(val.valor);
    listaProdutos.innerHTML += `
    <div class="lista-produtos-single">
      <h3>`+val.nome+`</h3>
      <h3 class="price-produto"><span>R$ `+val.valor+`</span></h3>
    </div><!--lista-produtos-single-->
    `;
  });
  soma = soma.toFixed(2);
  nomeProduto.value = "";
  valorProduto.value = "";

  var elementoSoma = document.querySelector('.soma-produtos h1');
  elementoSoma.innerHTML = 'TOTAL: R$ '+soma;
});

document.querySelector('button[name=limpar]')
.addEventListener('click', ()=>{
  var itens = [];

  document.querySelector('.lista-produtos').innerHTML = "";
  document.querySelector('.soma-produtos h1').innerHTML = 'TOTAL: R$ 00.00';
});

