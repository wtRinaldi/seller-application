const express = require('express')
const app = express()

const faunadb = require('faunadb')
const cors = require('cors')
const client = new faunadb.Client({
  secret: 'fnAERL--DEAAQ32kGaStBfV2QCYCqIq-FUUwazea',
  domain: 'db.us.fauna.com'
})

const corsOptions = { origin: 'http://localhost:8080' }

const {
  Get,
  Create,
  Ref,
  Collection
} = faunadb.query

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors(corsOptions))

app.listen(5000, () => console.log('API on http://localhost:5000'))

app.get('/sellers/:id', async (req, res) => {
  try {
    const doc = await client.query(
      Get(
        Ref(
          Collection('sellers'),
          req.params.id
        )
      )
    )
    res.send(doc)
  } catch (e) {
    console.log(e)
  }
})

app.post('/sellers', async (req, res) => {
  console.log(req.body)
  try {
    const { data } = await client.query(
      Create(Collection('sellers'), { data: req.body })
    )

    res.status(201).json(data)
  } catch (e) {
    console.log(e)
  }
})
