const express = require('express')
require("./src/database/connection");

const app = express()
// const port = process.env.PORT
const port = process.env.PORT || 3000

// Request parsing
app.use(bodyParser.json())


app.listen(port, () => {
    console.log('Server is up on port ' + port)
})
