let pagina = document.querySelector('#innerpagina');
let pedidos = document.querySelector('.l1');
let personalizar = document.querySelector('.l2');
let loja = document.querySelector('.l3');
let conta = document.querySelector('.l4');
let titulo = document.querySelector('#titulo');

//Pegar Mes atual (Usado em Pedidos)
var data = new Date();
mes = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];

//Cria Constante com o HTML a ser inserido
const innerPedidos = '<div class="conta"><div class="contaheader"><h3>Conta</h3><span id="conta-mes">Junho 2023</span></div><div id="valor-conta">R$ 605,80</div><a href="#" class="btx boleto">Pagar com Boleto</a><div class="historico-pedidos"><div class="historicoheader"> <h3>Histórico de Pedidos</h3></div></div><div id="lista-pedidos"><div class="pedidosheader"><span>Peça</span><span>Marca/Modelo</span><span>Solicitação</span><span>Status</span></div><a href="#" id="pedido01" class="pedido"><span id="peca01">Peça</span><span id="carro01">Toyota Etios</span><span id="solicitacao01">06/06/2021</span><div class="content-status"><span id="status01">Entregue</span><div id="corstatus01" class="divstatus"></div></div></a></div>';

const innerPersonalizar = '<form action="#"><div class="contentgrid"><h3>Veículo</h3><div class="gridveiculo"><div class="contentinput"><label for="montadora">Qual a montadora do Veículo?</label><input type="text" required id="montadora" placeholder="Ex. Fiat"></div><div class="contentinput"><label for="modelo">Qual o Modelo?</label><input type="text" required id="modelo" placeholder="Ex. Uno"></div><div class="contentinput"><label for="ano">Qual o Ano de Fabricação?</label><input type="number" max="2024" min="1960" required id="ano" placeholder="Digite o ano do veiculo" value="2023"></div></div></div><div class="contentgrid"><h3>Peça a ser Personalizada</h3><div class="gridveiculo"><div class="contentinput"><label for="peca">Qual Peça será personalizada?</label><input type="text" required id="peca" placeholder="Ex. Disco de Freio"></div><div class="contentinput"><label for="dimencoes">Quais as dimenções da Peça?</label><input type="text" required id="dimencoes" placeholder="Ex. 40cm x 40cm"></div><div class="contentinput"><label for="cor">Qual a cor da Peça?</label><input type="text" required id="cor" placeholder="Ex. Vermelho"></div></div><div class="contentinput textarea"><label for="descricao">Descrição</label><textarea id="descricao" required cols="30" rows="10" placeholder="Descreva como a Peça será personalizada"></textarea></div><div class="submit"><input type="submit" value="Solicitar Orçamento"></div></div></form>';

const innerLoja = '<h3>Produtos em Destaque</h3><div class="gridprodutos"><div class="contentproduto"><div class="produto"><div class="detalhes"><img src="src/Disco.png" alt=""></div><div class="comprar"><h4 class="tituloproduto">Disco de Alguma coisa</h4><div class="contentpreco"><h5 class="precoantigo">de <b>R$ 329,80</b></h5><h3 class="preco">R$ 289,30</h3></div></div><div class="actcompra"><a href="" class="buy">Comprar agora<img src="src/Carrinho.svg" alt=""></a><a href="" class="vermais">Ver mais</a></div></div><div class="desconto">Economize <b>R$ 40,50</b></div></div><div class="contentproduto"><div class="produto"><div class="detalhes"><img src="src/Disco.png" alt=""></div><div class="comprar"><h4 class="tituloproduto">Disco de Alguma coisa</h4><div class="contentpreco"><h5 class="precoantigo">de <b>R$ 329,80</b></h5><h3 class="preco">R$ 289,30</h3></div></div><div class="actcompra"><a href="" class="buy">Comprar agora<img src="src/Carrinho.svg" alt=""></a><a href="" class="vermais">Ver mais</a></div></div><div class="desconto">Economize <b>R$ 40,50</b></div></div><div class="contentproduto"><div class="produto"><div class="detalhes"><img src="src/Disco.png" alt=""></div><div class="comprar"><h4 class="tituloproduto">Disco de Alguma coisa</h4><div class="contentpreco"><h5 class="precoantigo">de <b>R$ 329,80</b></h5><h3 class="preco">R$ 289,30</h3></div></div><div class="actcompra"><a href="" class="buy">Comprar agora<img src="src/Carrinho.svg" alt=""></a><a href="" class="vermais">Ver mais</a></div></div><div class="desconto">Economize <b>R$ 40,50</b></div></div><div class="contentproduto"><div class="produto"><div class="detalhes"><img src="src/Disco.png" alt=""></div><div class="comprar"><h4 class="tituloproduto">Disco de Alguma coisa</h4><div class="contentpreco"><h5 class="precoantigo">de <b>R$ 329,80</b></h5><h3 class="preco">R$ 289,30</h3></div></div><div class="actcompra"><a href="" class="buy">Comprar agora<img src="src/Carrinho.svg" alt=""></a><a href="" class="vermais">Ver mais</a></div></div><div class="desconto">Economize <b>R$ 40,50</b></div></div><div class="contentproduto"><div class="produto"><div class="detalhes"><img src="src/Disco.png" alt=""></div><div class="comprar"><h4 class="tituloproduto">Disco de Alguma coisa</h4><div class="contentpreco"><h5 class="precoantigo">de <b>R$ 329,80</b></h5><h3 class="preco">R$ 289,30</h3></div></div><div class="actcompra"><a href="" class="buy">Comprar agora<img src="src/Carrinho.svg" alt=""></a><a href="" class="vermais">Ver mais</a></div></div><div class="desconto">Economize <b>R$ 40,50</b></div></div></div>';

//Definir Pedidos como Padrão
if(pedidos.classList.contains('active')){
    pagina.innerHTML = innerPedidos;
    document.querySelector('#conta-mes').innerHTML = mes[data.getMonth()] + ' de ' + data.getFullYear();
}

//Adiciona evento de CLICK e insere o HTML
pedidos.addEventListener('click', () =>{
    pedidos.classList.add('active');
    personalizar.classList.remove('active');
    loja.classList.remove('active');
    conta.classList.remove('active');
    pagina.innerHTML = innerPedidos;
    titulo.innerHTML = "Meus Pedidos";

    document.querySelector('#conta-mes').innerHTML = mes[data.getMonth()] + ' de ' + data.getFullYear();
});

personalizar.addEventListener('click', () =>{
    pedidos.classList.remove('active');
    personalizar.classList.add('active');
    loja.classList.remove('active');
    conta.classList.remove('active');
    pagina.innerHTML = innerPersonalizar;
    titulo.innerHTML = "Personalizar";
});

loja.addEventListener('click', () =>{
    pedidos.classList.remove('active');
    personalizar.classList.remove('active');
    loja.classList.add('active');
    conta.classList.remove('active');
    pagina.innerHTML = innerLoja;
    titulo.innerHTML = "Loja";
});

