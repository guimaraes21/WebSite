let nome = document.getElementById('nome').value;
let senha = document.getElementById('senha').value;

function salvar() {

    if (nome === senha) {
        alert('Sua senha precisa ser diferente do nome');

    } else {
        alert('Login salvo com sucesso');
    }
}
