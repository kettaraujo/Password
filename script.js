let sliderElement = document.querySelector("#slider");
let buttonElement = document.querySelector("#button");

let sizePassword = document.querySelector("#valor");
let password = document.querySelector("#password");

let containerPassword = document.querySelector("#container-password");

let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&"
let novaSenha = "";

sizePassword.innerHTML = sliderElement.value; //pega o valor

sliderElement.oninput = function(){ //muda o valor quando mexe no botão
    sizePassword.innerHTML = this.value; //recebe o valor que tem atualmente dentro do slider
}

function generatePassword(){

    let pass = "";

    for(let i = 0, n = charset.length; i < sliderElement.value; ++i){
     pass += charset.charAt(Math.floor(Math.random() * n));
    }

    containerPassword.classList.remove("hide");
    password.innerHTML = pass;
    novaSenha = pass;
}

function copyPassword(){
    alert("senha copiada com sucesso");
    navigator.clipboard.writeText(novaSenha);
}
