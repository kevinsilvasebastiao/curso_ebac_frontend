"use strict";

var alunos = [{
  nome: 'kevin',
  nota: 9
}, {
  nome: 'larissa',
  nota: 4
}, {
  nome: 'polenta',
  nota: 8
}, {
  nome: 'nidoram',
  nota: 5
}, {
  nome: 'joazinho',
  nota: 6
}];
var alunosAprovados = function alunosAprovados(listaAlunos) {
  return listaAlunos.filter(function (aluno) {
    return aluno.nota >= 6;
  });
};
var alunosAprovadosArray = alunosAprovados(alunos);
console.log("Alunos aprovados:");
console.log(alunosAprovadosArray);