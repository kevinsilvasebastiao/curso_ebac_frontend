const alunos = [
    { nome: 'kevin', nota: 9 },
    { nome: 'larissa', nota: 4 },
    { nome: 'polenta', nota: 8 },
    { nome: 'nidoram', nota: 5 },
    { nome: 'joazinho', nota: 6 }
];

const alunosAprovados = (listaAlunos) => {
    return listaAlunos.filter(aluno => aluno.nota >= 6);
};

const alunosAprovadosArray = alunosAprovados(alunos);

console.log("Alunos aprovados:");
console.log(alunosAprovadosArray);
