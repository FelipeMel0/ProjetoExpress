const express = require("express")
const app = express()

app.get("/", function(req, res){
    res.sendFile(__dirname + "/html/index.html")
})

app.get("/sobre", function(req, res){
    res.sendFile(__dirname + "/html/sobre.html")
})

app.get("/blog", function(req, res){
    res.send("Saia imediatamente do meu blog. Tchau.")
})

app.get("/ola/:nome/:cargo", function(req, res){
    res.send("Olá " + req.params.nome + ". Seu cargo é: " + req.params.cargo)
})



app.listen(8081, function() {
    console.log("Servidor rodando na url http://localhost:8081")
}) //sempre será a última linha do código

//No terminal, pressionar ctrl+c "fecha" o servidor