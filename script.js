var listaFilmes = [];

exibirListaFilmes();

function adicionarFilme() {
  var nomeFilme = document.getElementById("nome").value;

  var analise = verificarArray(nomeFilme);
  var enderecoFilme = document.getElementById("filme").value;

  if (analise == true) {
    alert("Nome já cadastrado");
  } else {
    if (enderecoFilme.endsWith(".jpg") || enderecoFilme.endsWith(".png")) {
      listaFilmes.push((nomeFilme = { nome: nomeFilme, url: enderecoFilme }));
    }
  }
}
console.log(listaFilmes);