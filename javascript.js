const Items = [
    {
        id:0,
        nome:'Bolsa',
        img:"bolsa.png",
        quantidade:0,
        preco:100
    },
    {
        id:1,
        nome:'mochila',
        img:"mochila.png",
        quantidade:0,
        preco:200
    },
    {
        id:2,
        nome:'Livros',
        img:"livros.png",
        quantidade:0,
        preco:300
    },
]

function inicializar(){
    var conteinerProdutos = document.getElementById('produtos');
    Items.map(function(val){
        conteinerProdutos.innerHTML+=`
        
        <div class ="produtos-single">
        <p>`+val.nome+`</p>
        <img width="200px"; src ="`+val.img+`"/>
        <a key = "`+val.id+`" href ="#">adicionar ao carrinho</a>
        </div>
        
        `;
    })
}
inicializar();
function atualizarCarrinho(){
    var conteinerCarrinho = document.getElementById('carrinho');
     conteinerCarrinho.innerHTML="";
     Items.map(function(val){
        if(val.quantidade > 0){
        conteinerCarrinho.innerHTML+=`
        
        <img width="50px"; src="`+val.img+`"/>
        <p>`+val.nome+`  | quantidade: `+val.quantidade+`</p>
        
        `;
    }})
}
var Links = document.getElementsByTagName('a');
for(i = 0; i < Links.length;i++){
    Links[i].addEventListener('click',function(){
        let key = this.getAttribute('key');
        Items[key].quantidade++;
        atualizarCarrinho();
        return false;
    })
}


