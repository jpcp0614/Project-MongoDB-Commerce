// Adicione o campo avaliação em todos os documentos da coleção
// e efetue alterações nesse campo

/*
1) Crie uma query que inclua o campo avaliação do tipo NumberInt,
   com o valor 0 em todos os documentos da coleção.

2) Crie uma query que incremente o valor do campo avaliação em 5
   em todos os sanduíches de carne do tipo bovino.
   dica: utilize como filtro o campo tags.

3) Crie uma query que incremente o valor do campo avaliação
   em 3 em todos os sanduíches de ave.

4) Crie uma query que retorne o nome e avaliação de todos os sanduíches.
*/

db.produtos.updateMany(
  {},
  {
    $set: {
      avaliacao: NumberInt(0),
    },
  },
);

db.produtos.updateMany(
  { tags: "bovino" },
  {
    $inc: {
      avaliacao: NumberInt(5),
    },
  },
);

db.produtos.updateMany(
  { tags: "ave" },
  {
    $inc: {
      avaliacao: NumberInt(3),
    },
  },
);

db.produtos.find(
  {},
  { _id: 0, nome: 1, avaliacao: 1 },
);