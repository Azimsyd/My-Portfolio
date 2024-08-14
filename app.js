const express = require('express')
const app = express()
const port = 3000
const path = require('path')

// app.use(express.static('public'))
app.use('/static', express.static(path.join(__dirname, 'static')))
console.log(path.join(__dirname, 'static'))

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.get('/', (req, res) => {
    res.status(200).render('index')
})

app.get('/', (req, res) => {
  res.send('opps page not found!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})