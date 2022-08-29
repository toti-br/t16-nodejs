const express = require('express')

const app = express()

app.set('view engine', 'ejs')
// app.set('views')

app.use(express.urlencoded({ extended: true }))

app.use('/styles', express.static("static/css"))
app.use('/images', express.static("static/img"))

bd_fake = {
    contatos: [
        'contato@contato.test',
        '33333-3333-33333-3333',
        'minhapagina.eu.test'
    ],
    comentarios: [
        { nome: 'Lucas', msg: 'Nossa! QUE SITE MANEEEEEIRO!!!!'},
    ]
}


app.get('/', (req, res) => {
    


    res.render('index', {
        pageName: "Home",
        nome: req.query.nome
    })

    // res.send(`<html>
    // <head></head>
    // <body><h1>Homepage!</h1>
    // </body>
    // </html>`
    // )

})

app.get('/contatos', (req, res) => {
    res.render('contatos', {
        pageName: "Contatos",
        contatos: bd_fake.contatos
    })

    // res.send(`<html>
    // <head></head>
    // <body><h1>Meus contatos, fale comigo</h1></body>
    // </html>`)
})

app.get('/comentarios', (req, res) => {
    res.render('comentarios', {
        pageName: "Comentários",
        comentarios: bd_fake.comentarios
    })
})

app.post('/comentarios', (req, res) => {
    let nome = req.body.nome
    let msg = req.body.msg

    if (nome && msg) {
        bd_fake.comentarios.push({
            nome,
            msg
        })
    }

    res.redirect('/comentarios')
})


app.listen(3000, () => console.log('http://localhost:3000'))