//consts de todos os personagens jogaveis(não colocar inimigos)
const foguinho = new Personagens('emby','Bola de fogo','Explosão de fogo',10,20,100);
foguinho.criarPersonagem();

const dragao= new Personagens('draglle','mordida','sopro de fogo',10,20,100);
dragao.criarPersonagem();

const personagensDoJogo = [{personagem1:foguinho,personagem2:dragao}];
console.log(personagensDoJogo)
