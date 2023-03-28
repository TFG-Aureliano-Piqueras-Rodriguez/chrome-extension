import express from 'express'
import db from '../db/conn.mjs'
import { ObjectId } from 'mongodb'

const router = express.Router()

// Get a list of 50 posts
router.get('/', async (req, res) => {
  const collection = db.collection('posts')
  const results = await collection.find({})
    .limit(50)
    .toArray()

  res.send(results).status(200)
})

// Fetches the latest posts
router.get('/latest', async (req, res) => {
  const collection = db.collection('posts')
  const results = await collection.aggregate([
    { $project: { author: 1, title: 1, tags: 1, date: 1 } },
    { $sort: { date: -1 } },
    { $limit: 3 }
  ]).toArray()
  res.send(results).status(200)
})

// Get a single post
router.get('/:id', async (req, res) => {
  const collection = db.collection('posts')
  const query = { _id: ObjectId(req.params.id) }
  const result = await collection.findOne(query)

  if (!result) res.send('Not found').status(404)
  else res.send(result).status(200)
})

// Add a new document to the collection
router.post('/', async (req, res) => {
  const collection = db.collection('posts')
  const newDocument = req.body
  newDocument.date = new Date()
  const result = await collection.insertOne(newDocument)
  res.send(result).status(204)
})

// Update the post with a new comment
router.patch('/comment/:id', async (req, res) => {
  const query = { _id: ObjectId(req.params.id) }
  const updates = {
    $push: { comments: req.body }
  }

  const collection = db.collection('posts')
  const result = await collection.updateOne(query, updates)

  res.send(result).status(200)
})

// Delete an entry
router.delete('/:id', async (req, res) => {
  const query = { _id: ObjectId(req.params.id) }

  const collection = db.collection('posts')
  const result = await collection.deleteOne(query)

  res.send(result).status(200)
})

export default router
