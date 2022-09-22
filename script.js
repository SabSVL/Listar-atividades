var arrayMateria = [];
var arrayData = [];
var arrayAtividade = [];

var arrayMateriaConcluida = [];
var arrayDataConcluida = [];
var arrayAtividadeConcluida = [];

var data = new Date();
var dia = String(data.getDate()).padStart(2, "0");
var mes = String(data.getMonth() + 1).padStart(2, "0");
var ano = data.getFullYear();
var dataAtual = ano + "-" + mes + "-" + dia;

function Adicionar() {
  var materia = document.getElementById("materia").value;
  var atividade = document.getElementById("atividade").value;
  var data = document.getElementById("data").value;
  adicionarNoArray(materia, atividade, data);
  mostrarNaTela();
  document.getElementById("materia").value = "";
  document.getElementById("atividade").value = "";
  document.getElementById("data").value = "";
}

function adicionarNoArray(materia, atividade, data) {
  if (data >= dataAtual && materia != "" && atividade != "") {
    arrayAtividade.push(atividade);
    arrayMateria.push(materia);
    arrayData.push(data);
  } else {
    alert("Preencha todos os campos corretamente!");
  }
}

function mostrarNaTela() {
  var tela = document.getElementById("progressoAtividades");
  var elemento = "";
  tela.innerHTML = "";

  for (var i = 0; i < arrayMateria.length; i++) {
    elemento += "<tr>";
    elemento += "<td>" + arrayMateria[i] + "</td>";
    elemento += "<td>" + arrayAtividade[i] + "</td>";
    elemento += "<td>" + arrayData[i] + "</td>";
    elemento +=
      "<td><button onclick='Excluir(" +
      i +
      ")'  id='btnExcluir'>🗑️</button><button onclick='arrayConcluidos(" +
      i +
      ")'  id='btnConcluido'>✔</button> </td>";
    elemento += "</tr>";
  }
  tela.innerHTML = elemento;
}

function Concluido(i) {
  var tela = document.getElementById("concluidoAtividades");
  var elemento = "";
  tela.innerHTML = "";

  for (var c = 0; c < arrayMateriaConcluida.length; c++) {
    elemento += "<tr>";
    elemento += "<td>" + arrayMateriaConcluida[c] + "</td>";
    elemento += "<td>" + arrayAtividadeConcluida[c] + "</td>";
    elemento += "<td>" + arrayDataConcluida[c] + "</td>";
    elemento +=
      "<td><button onclick='ExcluirConcluidos(" +
      c +
      ")'id='btnExcluir'>🗑️</button</td>";
    elemento += "</tr>";
  }
  tela.innerHTML = elemento;
  Excluir(i);
}

function arrayConcluidos(d) {
  arrayAtividadeConcluida.push(arrayAtividade[d]);
  arrayMateriaConcluida.push(arrayMateria[d]);
  arrayDataConcluida.push(arrayData[d]);
  Concluido(d);
}

function Excluir(i) {
  arrayAtividade.splice(i, 1);
  arrayMateria.splice(i, 1);
  arrayData.splice(i, 1);
  mostrarNaTela();
}

function ExcluirConcluidos(i) {
  arrayAtividadeConcluida.splice(i, 1);
  arrayMateriaConcluida.splice(i, 1);
  arrayDataConcluida.splice(i, 1);
  Concluido();
}