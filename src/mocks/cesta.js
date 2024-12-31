import logo from '../../assets/logo.png';
import tomate from '../../assets/frutas/Tomate.png';
import brocolis from '../../assets/frutas/Brócolis.png';
import abobora from '../../assets/frutas/Abóbora.png';
import pepino from '../../assets/frutas/Pepino.png';
import batata from '../../assets/frutas/Batata.png';

const  cesta = {
    topo:{
        titulo:"Detalhe da cesta",
    },
    detalhes:{
        nome:"Cesta de Verduras",
        logoFazenda: logo,
        nomeFazenda: "Jenny Jack Farm",
        descricao: "Uma cesta com produtos selecionados cuidadosamente da fazendo para a cozinha.",
        preco: "R$40,00",
        botao: "Comprar",
    },
    itens:{
        title:"Itens da cesta",
        lista:[
            {
                nome:"Tomate",
                imagem: tomate,
            },
            {
                nome:"Brócolis",
                imagem: brocolis,
            },
            {
                nome:"Abóbora",
                imagem: abobora,
            },
            {
                nome:"Batata",
                imagem: batata,
            },
            {
                nome:"Pepino",
                imagem: pepino,
            },
        ]
    }
}

export default cesta;