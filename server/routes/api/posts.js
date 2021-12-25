const express = require('express');
const mongodb = require('mongodb');


const router=express.Router();

//GET

router.get('/', async (req,res)=>{
  const posts = await getAllStoredPosts();
  res.send(await posts.find({}).toArray());
  // res.send("HI");
});

//PUT / Updates reciord

//DELETE
router.delete('/:id',async (req,res)=>{
  const posts = await getAllStoredPosts();
  await posts.deleteOne({_id: new mongodb.ObjectID(req.params.id)})
  res.status(200).send();
});
//POST
router.post('/', async (req,res)=>{
  const posts = await getAllStoredPosts();
  await posts.insertOne({
    text: req.body.text,
    createdAt: new Date()
  })
  res.status(201).send();
});
//funtions

async function getAllStoredPosts(){
  const client = await mongodb.MongoClient.connect(
    'mongodb+srv://neo:2021matrix@learnvue.zjfv8.mongodb.net/LearnVue?retryWrites=true&w=majority',{
      useNewURLParser: true
  });
  return client.db('LearnVue').collection('posts');
}

module.exports=router;
