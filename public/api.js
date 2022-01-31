const express = require('express')


const app = express()
const routes = require('../routes/')
const router = express.Router()


const server = app.listen(3001)
server.on('listening', async () => {
    console.log('escuchando')
});

app.use('/pay', routes)


// app.get('/pays', async (req, res) => {
//     res.sendFile(path.join(__dirname.replace('public', 'views'), '/index.html'))
// });


