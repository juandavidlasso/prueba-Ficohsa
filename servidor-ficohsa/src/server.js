const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const routes = require('./routes/routes')
dotenv.config()

const app = express()

app.use(cors())
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use('/api', routes)


const port = process.env.PORT || 5000
app.listen(port, () => [
    console.log(`Servidor corriendo en http://localhost:${port}`)
])