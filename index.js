'use strict'

const express = require('express')
const bodyParse = require('body-parser')

const app = express()
const port = process.env.PORT || 3001

app.use(bodyParse.urlencoded({ extended: false }))
app.use(bodyParse.json())

app.listen(port, () => {
    console.log(`API REST corriendo en http://localhost:${port}`)
})