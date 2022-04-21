const express = require('express');

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.static(path.resolve(__dirname, '../client/build')));

//#region ROTAS

app.get("/api", (req, res) => {
    res.json({ message: "Olá aqui é o servidor!" });
})

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
})

//#endregion

app.listen(PORT, () => {
    console.log(`Server rodando na porta ${PORT}`)
})