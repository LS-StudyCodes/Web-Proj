function validarCadastro(){
    if(document.getElementById("SenhaUsuario").value != document.getElementById("SenhaUsuario2").value){
        alert("As senhas não conferem!")
    }
    else {
        alert("Cadastro realizado com sucesso!")
        location.href = "/web_proj/Home/Home.html"
    }
}