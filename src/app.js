import express from "express";
import cors from "cors"
import validateToken from "./service.mjs";

const port = 4343
const host = `http://localhost:${port}`

const app = express()
app.use(cors())
app.use(express.json())

app.get("/", (req, res) => {
  res.send({ message: "HOME" })
})

app.post("/verify-token", async (req, res) => {
  const { body } = req
  const { user, email, token } = body;

  console.log("token:", token)

  if (!user || !email || !token) {
    let fieldData = [];

    for (const field in body) {

      if (!body[field]) {
        fieldData.push(field);
      }
    }
    return res.status(422).send({
      message: "Dados faltantes em: " + JSON.stringify(fieldData)
    });
  }

  const response = await validateToken(token)

  if (response?.success) {
    return res.status(200).send({ message: "Token validado" });
  } else {
    res.status(500).send({
      message: "Erro na validação do token"
    });
    console.log("Erro na validação do token:", response);
  }

});


app.listen(port, () => {
  console.log(`Application runnning: ${host}`)
})