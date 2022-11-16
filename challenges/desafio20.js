// Remova o primeiro ingrediente do sanduíche Quarteirão com Queijo

/*
1) Crie uma query que faça a remoção do primeiro
   ingrediente no sanduíche Quarteirão com Queijo.

2) Crie uma query que retorne o nome e ingredientes de todos os documentos.
*/

db.produtos.updateOne(
  { nome: "Quarteirão com Queijo" },
  { $pop: { ingredientes: -1 } },
);

db.produtos.find(
  {},
  { _id: 0, nome: 1, ingredientes: 1 },
);