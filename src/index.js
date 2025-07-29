const express = require('express')
const morgan = require('morgan')
const path = require('path')
const hbs = require('express-handlebars')
const app = express()
const port = 3000
const route = require('./routes')
// HTTP logger
app.use(morgan('combined'))

app.use(express.static(path.join(__dirname, 'public')))
//temlate engine
app.engine('hbs', hbs.engine())
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'resource', 'views'))

route(app)
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
