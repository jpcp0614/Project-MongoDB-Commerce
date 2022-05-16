// Remova o item cebola de todos os sanduíches

/*
1) Crie uma query que faça a remoção do item cebola em todos os sanduíches.

2) Crie uma query que retorne o nome e ingredientes de todos os documentos.
*/

db.produtos.updateMany(
  {},
  { $pull: { ingredientes: "cebola" } },
);

db.produtos.find(
  {},
  { _id: 0, nome: 1, ingredientes: 1 },
);