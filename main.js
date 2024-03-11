function consultarCNPJ() {
    var cnpj = document.getElementById("pesquisaCNPJ").value;
    fetch("https://cors-anywhere.herokuapp.com/https://receitaws.com.br/v1/" + cnpj).then((response) => {
        if(response.ok) {
            return response.json();
        }
    }).then((dados) => {
        console.log(dados)
    })
}