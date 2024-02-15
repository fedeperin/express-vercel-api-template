import 'dotenv/config'
import express from 'express'
import cors from 'cors'

const app = express()

app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
    res.json({
        message: 'Hello'
    })
})

export default app