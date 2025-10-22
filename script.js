function verificar () {
    let senha = Number(document.getElementById("local").value)
    if (senha === 1234){
        document.getElementById("resultado").innerText = "Senha Correta!"
    }
    else {document.getElementById("resultado").innerText = "Senha Incorreta."}
}