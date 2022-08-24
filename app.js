const http = require('http')

const server = http.createServer((request, response) => {

    const method = request.method
    const url = request.url
    // request.headers

    if (method == 'GET') {
        if (url == '/') {
            response.end(`<h1>Homepage!</h1>`)
        } else if (url == '/contatos') {
            response.end(`<html>
    <head></head>
    <body><h1>Meus contatos, fale comigo</h1></body>
    </html>`)
        } else if (url == '/produtos') {
            // buscar os dados no BD
            // resposta
        } else {
            response.statusCode = 404
            response.end(`<html>
    <head></head>
    <body><h1>Nao encontrado</h1></body>
    </html>`)
        }
    }

    
})

server.listen(3001)