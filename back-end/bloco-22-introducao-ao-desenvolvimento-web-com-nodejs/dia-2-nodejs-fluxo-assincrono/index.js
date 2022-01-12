// const dia2 = (a, b, c) => {
//   const promise = new Promise((resolve, reject) => {
//     if (typeof a !== "number" || typeof b !== "number" || typeof c !== "number")
//       reject(new Error("Informe apenas números"));

//     const result = (a + b) * c;
//     if (result < 50) reject(new Error(`Valor muito baixo: ${result}`));

//     resolve(result);
//   });
//   return promise;
// };

// const a = Math.floor(Math.random() * 100 + 1);
// const b = Math.floor(Math.random() * 100 + 1);
// const c = Math.floor(Math.random() * 100 + 1);

// dia2(a, b, c)
//   .then((result) => console.log(result))
//   .catch((error) => console.log(error.message));

// dia2(a, 'b', c)
//   .then((result) => console.log(result))
//   .catch((error) => console.log(error.message));

// const dia2 = (a, b, c) => {
//   const promise = new Promise((resolve, reject) => {
//     if (typeof a !== "number" || typeof b !== "number" || typeof c !== "number")
//       reject(new Error("Informe apenas números"));

//     const result = (a + b) * c;
//     if (result < 50) reject(new Error(`Valor muito baixo: ${result}`));

//     resolve(result);
//   });
//   return promise;
// };

// const a = Math.floor(Math.random() * 100 + 1);
// const b = Math.floor(Math.random() * 100 + 1);
// const c = Math.floor(Math.random() * 100 + 1);

// const main = async () => {
//   try {
//     const result = await dia2(a, b, c);
//     console.log(result);
//   } catch (error) {
//     console.log(error.message);
//   }
// };

// main();

const fs = require("fs").promises;

const SIMPSON = "./simpson.json";

// const ex1 = async () => {
//   const result = await fs.readFile(SIMPSON, "utf-8");
//   const json = JSON.parse(result);
//   return json.map(({ id, name }) => {
//     console.log(`${id} - ${name}`);
//     return `${id} - ${name}`;
//   });
// };

// ex1();

// const ex2 = async (id_selec) => {
//   const result = await fs.readFile(SIMPSON, "utf-8");
//   const json = await JSON.parse(result);

//   const charSimpson = json.find(({ id }) => id_selec === Number(id));

//   if (!charSimpson) throw new Error("id não encontrado");

//   return charSimpson;
// };
// ex2(1);

// const ex3 = async () => {
//   const result = await fs.readFile(SIMPSON, "utf-8");
//   const json = await JSON.parse(result);

//   const novoJson =  json.filter(({ id }) => id !== "10" && id !== "6");

//   await fs.writeFile(SIMPSON, JSON.stringify(novoJson));
// };
// ex3();

// const ex4 = async () => {
//   const result = await fs.readFile(SIMPSON, "utf-8");
//   const json = await JSON.parse(result);
//   const novoJson = json.filter(({ id }) => ['1', '2', '3', '4'].includes(id));
//  await fs.writeFile("./simpsonFamily.json", JSON.stringify(novoJson));
// };
// ex4();

// const ex5 = async () => {
//   const result = await fs.readFile(SIMPSON, "utf-8");
//   const json = await JSON.parse(result);
//   const novoJson = json.filter(({ name }) => name === "Nelson Muntz");

//   const resultFamily = await fs.readFile("./simpsonFamily.json", "utf-8");
//   const jsonFamily = await JSON.parse(resultFamily);
// 	const arrayfamily = [...jsonFamily, ...novoJson]

//   await fs.writeFile("./simpsonFamily.json", JSON.stringify(arrayfamily));
// };
// ex5();

// const ex6 = async () => {
//   const result = await fs.readFile("./simpsonFamily.json", "utf-8");
//   const json = await JSON.parse(result);
//   const novoJson = json.filter(({ name }) => name !== "Nelson Muntz");
//   const family = novoJson.concat([{ id: "5", name: "Maggie Simpson" }]);

// 	await fs.writeFile("./simpsonFamily.json", JSON.stringify(family));
// };
// ex6();
