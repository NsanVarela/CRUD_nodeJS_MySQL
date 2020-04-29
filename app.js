const express = require(`express`)
const bodyParser = require(`body-parser`)
const cors = require(`cors`)
const jwt = require(`jsonwebtoken`)
const bcrypt = require(`bcrypt`)

const app = express()

app.use(bodyParser.json())
app.use(cors())

require(`dotenv`).config()
process.env.SECRET_KEY = `secret`

app.use(bodyParser.urlencoded({
    extended: true
}))

app.get(`/`, (req, res) => {
    res.json({
        message: `Welcome to noBord Database API.`
    })
})

require(`./routes/userRoutes`)(app)

const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`Server is running on port ${PORT}.`))