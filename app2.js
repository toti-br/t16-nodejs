const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.send(`<html>
    <head></head>
    <body><h1>Homepage!</h1>
    </body>
    </html>`
    )

})

// app.post("/contato")

app.get('/contatos', (req, res) => {
    res.send(`<html>
    <head></head>
    <body><h1>Meus contatos, fale comigo</h1></body>
    </html>`)
})


app.listen(3000)