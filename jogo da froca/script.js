let tentativas = 6;
let listaDinamica = [];
let palavraSecretaCategoria;
let palavraSecretaSorteada;
const palavras = [
    palavra001 = {
        nome: "IRLANDA",
        categoria: "LUGARES"
    },
    palavra002 = {
        nome: "BRASIL",
        categoria: "LUGARES"
    },
    palavra003 = {
        nome: "EUA",
        categoria: "LUGARES"
    },
    palavra004 = {
        nome: "ALEMANHA",
        categoria: "LUGARES"
    },
    palavra005 = {
        nome: "JAPAO",
        categoria: "LUGARES"
    },
    palavra006 = {
        nome: "PARIS",
        categoria: "LUGARES"
    },
    palavra007 = {
        nome: "ARGENTINA",
        categoria: "LUGARES"
    },
    palavra008 = {
        nome: "CANADA",
        categoria: "LUGARES"
    },
    palavra009 = {
        nome: "CHINA",
        categoria: "LUGARES"
    },
    palavra010 = {
        nome: "MEXICO",
        categoria: "LUGARES"
    },
    palavra011 = {
        nome: "VACA",
        categoria: "ANIMAL"
    },
    palavra012 = {
        nome: "TOURO",
        categoria: "ANIMAL"
    },
    palavra013 = {
        nome: "CAVALO",
        categoria: "ANIMAL"
    },
    palavra014 = {
        nome: "HORNITORINCO",
        categoria: "ANIMAL"
    },
    palavra015 = {
        nome: "ZEBRA",
        categoria: "ANIMAL"
    },
    palavra016 = {
        nome: "LEAO",
        categoria: "ANIMAL"
    },
    palavra017 = {
        nome: "CERVO",
        categoria: "ANIMAL"
    },
    palavra018 = {
        nome: "TIGRE",
        categoria: "ANIMAL"
    },
    palavra019 = {
        nome: "CACHORRO",
        categoria: "ANIMAL"
    },
    palavra020 = {
        nome: "GATO",
        categoria: "ANIMAL"
    },
    palavra021 = {
        nome: "BOLA",
        categoria: "OBJETO"
    },
    palavra022 = {
        nome: "MESA",
        categoria: "OBJETO"
    },
    palavra023 = {
        nome: "CADEIRA",
        categoria: "OBJETO"
    },
    palavra024 = {
        nome: "FACA",
        categoria: "OBJETO"
    },
    palavra025 = {
        nome: "ESCADA",
        categoria: "OBJETO"
    },
    palavra026 = {
        nome: "DIAMANTE",
        categoria: "OBJETO"
    },
    palavra027 = {
        nome: "TELEVISAO",
        categoria: "OBJETO"
    },
    palavra028 = {
        nome: "COMPUTADOR",
        categoria: "OBJETO"
    },
    palavra029 = {
        nome: "JOGO",
        categoria: "OBJETO"
    },
    palavra030 = {
        nome: "RADIO",
        categoria: "OBJETO"
    },
    palavra031 = {
        nome: "BICICLETA",
        categoria: "TRANSPORTE"
    },
    palavra032 = {
        nome: "CARRO",
        categoria: "TRANSPORTE"
    },
    palavra033 = {
        nome: "AVIAO",
        categoria: "TRANSPORTE"
    },
    palavra034 = {
        nome: "MOTO",
        categoria: "TRANSPORTE"
    },
    palavra035 = {
        nome: "ONIBUS",
        categoria: "TRANSPORTE"
    },
]

criarPalavraSecreta();
function criarPalavraSecreta(){
    const indexPalavra = parseInt(Math.random() * palavras.length)

    palavraSecretaSorteada = palavras[indexPalavra].nome;
    palavraSecretaCategoria = palavras[indexPalavra].categoria;
    console.log(palavraSecretaSorteada)
    console.log(palavraSecretaCategoria)
}

montarPalavraNaTela();
function montarPalavraNaTela(){
    const categoria = document.getElementById("categoria")
    categoria.innerHTML = palavraSecretaCategoria;

    const palavraTela = document.getElementById("palavra-secreta")
    palavraTela.innerHTML = "";

    for(i = 0; i < palavraSecretaSorteada.length; i++){
        if(listaDinamica[i] == undefined){
            listaDinamica[i] = "&nbsp;"
            palavraTela.innerHTML = palavraTela.innerHTML + "<div class='letras'>"+ listaDinamica[i] +"</div>"
        }
        else{
            palavraTela.innerHTML = palavraTela.innerHTML + "<div class='letras'>"+ listaDinamica[i] +"</div>"
        }
    }

}

function verificarLetraEscolida(letra){
    document.getElementById("teclas-" + letra).disabled = true
    if(tentativas > 0 ){
        mudarStyleLetra("teclas-" + letra);
        comparaListas(letra);
        montarPalavraNaTela();
    }
    
}

function mudarStyleLetra(tecla){
    document.getElementById(tecla).style.background = "#C71585";
    document.getElementById(tecla).style.color = "#ffffff";
}

function comparaListas(letra){
    const pos = palavraSecretaSorteada.indexOf(letra)
    if(pos < 0){
        tentativas--
        mudaimagem();
        if(tentativas == 0){
            abreModal("OPSS!", "Não foi dessa vez ... A palavra secreta era " + palavraSecretaSorteada);
        }
    }
    else{
        for(i = 0; i < palavraSecretaSorteada.length; i ++){
            if(palavraSecretaSorteada[i] == letra){
                listaDinamica[i] = letra;
            }
        }
    }

    let vitoria = true;
    for(i = 0; i < palavraSecretaSorteada.length; i++){
        if(palavraSecretaSorteada[i] != listaDinamica[i]){
            vitoria = false;
        }
    }
    if(vitoria == true){
        abreModal("Parabens!!!", "Você venceu... ");
        tentativas = 0;
    }
}

function mudaimagem(){
    switch(tentativas){
        case 5:
            document.getElementById("imagem").style.background = "url('./imagens/forca01.png')";
            break;
        case 4:
            document.getElementById("imagem").style.background = "url('./imagens/forca02.png')";
            break;
        case 3:
            document.getElementById("imagem").style.background = "url('./imagens/forca03.png')";
            break;
        case 2:
            document.getElementById("imagem").style.background = "url('./imagens/forca04.png')";
            break;
        case 1:
            document.getElementById("imagem").style.background = "url('./imagens/forca05.png')";
            break;
        case 0:
            document.getElementById("imagem").style.background = "url('./imagens/forca06.png')";
            break;
        default:
            document.getElementById("imagem").style.background = "url('./imagens/forca.png')";
            break;
    }
}

function abreModal(titulo, mensagem){
    let modalTitulo = document.getElementById("exampleModalLabel");
    modalTitulo.innerText = titulo;

    let modalBody = document.getElementById("modalBody");
    modalBody.innerText = mensagem;    
    $("#myModal").modal({
        show: true
    });
}

let bntReiniciar = document.querySelector("#btnReiniciar")
bntReiniciar.addEventListener("click", function(){
    location.reload()
})