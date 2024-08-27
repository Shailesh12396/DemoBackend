require('dotenv').config()
const express = require('express')
const app = express()
const connectDB=require('./db/indexDB')
const port = 3000

connectDB()

