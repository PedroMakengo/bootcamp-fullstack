import express from "express";

const app = express();

app.get("/users", (request, response) => {
  return response.json({
    users: ["Usuário 1", "Usuario 2"],
  });
});

app.post("/users", (request, response) => {
  return response.json({ message: "Criando usuário" });
});
app.put("/users", (request, response) => {
  return response.json({ message: "Atualizando usuário" });
});
app.delete("/users", (request, response) => {
  return response.json({ message: "Excluindo usuário" });
});

app.listen("3333", () => {
  console.log("Back-end Started !");
});
