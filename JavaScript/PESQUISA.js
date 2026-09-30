let botao = document.getElementById("btnbuscar");
botao.addEventListener("click", buscar);

function buscar(){
    let produtos = ["Arroz", "Feijão", "Macarrão", "Leite", "Açúcar"];
    let nome = document.getElementById("nome").value; 
    let encontrado = false;

    for(let i = 0; i < produtos.length; i++){
        if(nome.toLowerCase() == produtos[i].toLowerCase()){zz
            encontrado = true; 
        }
    }

    if(encontrado ==  true){
        document.getElementById("resultado").innerHTML = "produto encontrado";
    }
    else{
        document.getElementById("resultado").innerHTML = "produto não encontrado"
    }
}