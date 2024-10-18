const user = "usuario@mouts.com"
const senha = "mouts"

function validarLogin(){
    if (document.getElementById("NomeUsuarioInput").value != user || document.getElementById("SenhaUsuario").value != senha){
        alert("Nome de usuário ou senha incorretos!")
        return false
    } else {
        location.href = "/web_proj/Home/Home.html"
    }
}