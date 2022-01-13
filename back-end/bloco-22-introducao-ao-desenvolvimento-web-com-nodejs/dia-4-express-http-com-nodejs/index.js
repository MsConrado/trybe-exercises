const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs").promises;

const app = express();
app.use(bodyParser.json());

// 1
app.get("/ping", (_req, res) => {
  res.json({ message: "pong" });
});

// 2
app.post("/hello", (req, res) => {
  const { name } = req.body;
  console.log(name);
  res.json({ message: `Hello, ${name}` });
});

// 3
app.post("/greetings", (req, res) => {
  const { name, age } = req.body;
  if (age > 17) return res.status(200).json({ message: `Hello, ${name}!` });
  res.status(401).json({ message: "Unauthorized" });
});

// 4
app.put("/users/:name/:age", (req, res) => {
  const { name, age } = req.params;
  res
    .status(200)
    .json({ message: `Seu nome é ${name} e você tem ${age} anos de idade` });
});

// 5 - criei a api simpson.json

// 6
app.get("/simpson", async (_req, res) => {
  const result = await fs.readFile("./simpsons.json", "utf-8");
  const json = await JSON.parse(result);
  if (!json) return res.status(500).send("Error 500 = Internal Server Error");

  res.status(200).json(json);
});

// 7
app.get("/simpson/:id", async (req, res) => {
  const result = await fs.readFile("./simpsons.json", "utf-8");
  const json = await JSON.parse(result);

  const { id } = req.params;
  const filter = json.filter((idSimpson) => idSimpson.id === id);

  if (filter.length === 0)
    return res.status(404).send({ message: "simpson not found" });

  res.status(200).json(filter);
});

// 8
app.post("/simpsons", async (req, res) => {
  const { id, name } = req.body;

  const result = await fs.readFile("./simpsons.json", "utf-8");
  const json = await JSON.parse(result);

  const some = json.some(
    (simp) => simp.id.includes(id) || simp.name.includes(name)
  );

  if (some) return res.status(409).send({ message: "id already exists" });

  await json.push({ id, name });

  await fs.writeFile("./simpsons.json", JSON.stringify(json));

  res.status(204).end();
});

app.listen(3000, () => {
  console.log("Aplicação ouvindo na porta 3000");
});
