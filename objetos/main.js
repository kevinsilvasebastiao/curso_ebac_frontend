class Animal {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
    emitirSom() {
        throw new Error('Método emitirSom deve ser implementado nas classes filhas.');
    }
}
class Cachorro extends Animal {
    emitirSom() {
        return "Au au!";
    }
}
class Gato extends Animal {
    emitirSom() {
        return "Miau!";
    }
}
const animal1 = new Cachorro("Rex", 5);
const animal2 = new Gato("Whiskers", 3);
const animal3 = new Cachorro("Buddy", 2);

console.log(`${animal1.nome} diz: ${animal1.emitirSom()}`);
console.log(`${animal2.nome} diz: ${animal2.emitirSom()}`);
console.log(`${animal3.nome} diz: ${animal3.emitirSom()}`);
