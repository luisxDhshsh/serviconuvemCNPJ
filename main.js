function consultarCNPJ() {
 var cnpj = document.getElementById("pesquisaCNPJ").value;
 fetch("https://cors-anywhere.herokuapp.com/https://receitaws.com.br/v1/cnpj/" + cnpj).then((response) => {
    if(response.ok) {
        return response.json();
    }
 }).then((dados) => {
    console.log(dados)
    document.getElementById("dados").innerHTML = `
    
        Nome: ${dados.nome}<br><br>
        Complemento: ${dados.complemento}<br><br>
        Fantasia: ${dados.fantasia}<br><br>
        Situação: ${dados.situacao}<br><br>
        Logradouro: ${dados.logradouro}<br><br>
        UF: ${dados.uf}<br><br>
        E-mail: ${dados.email}<br><br>
        Abertura: ${dados.abertura}<br><br>
        CEP: ${dados.cep}<br><br>
        Município: ${dados.municipio}<br><br>
        Natureza Jurídica: ${dados.natureza_juridica}<br><br>
        Data Situação: ${dados.data_situacao}<br><br>
        Bairro: ${dados.bairro}<br><br>
        Porte: ${dados.porte}<br><br>
        Tipo: ${dados.tipo}
    `
 })
}