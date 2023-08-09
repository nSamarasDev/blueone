const path = require('path')
const morgan = require('morgan')
const express = require('express')
const dotenv = require('dotenv').config()
const connectDB = require('./config/db')
const colors = require('colors')

const PORT = process.env.PORT || 5050

const app = express()

connectDB()

app.listen(PORT, () => console.log(`Server running on ${PORT}`))