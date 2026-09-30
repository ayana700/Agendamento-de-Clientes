let nameInput = document.getElementById("name");
let emailInput = document.getElementById("email");
let horario = document.getElementById("horario");

let myForm = document.getElementById("my-form");
let userList = document.getElementById("users");

myForm.addEventListener("submit", clicar);

function clicar(e){
    e.preventDefault();
   //1. criar um novo elemento HTML em <li> em memória (ainda não visivel em pagina);
   let itemLi = document.createElement("li");
   //2. Preprara para inserir um elemento "filho" dentro da tag <li>
   itemLi.appendChild(
        //3.Criar um texto puro contendo as informações formatadas
     document.createTextNode(
        //4. Juntar os valores digitados nos inputs usando template Literais
        `${nameInput.value} : ${emailInput.value} : ${horario.value} `

    )
   )
   
   userList.appendChild(itemLi);

}