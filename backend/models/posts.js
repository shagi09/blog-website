const mongoose=require('mongoose')

const PostSchema=mongoose.Schema({
title: String,
category: String,
content: String,
thumbnail: String
})
const PostModel=mongoose.model('posts',PostSchema)
module.exports=PostModel 