const express = require('express')
const newsRouter = express.Router()
const axios = require('axios')
newsRouter.get('',async(req,res)=>{

try{
    const newsAPI = await axios.get(`https://newsapi.org/v2/everything?q=Apple&from=2022-04-27&sortBy=popularity&apiKey=c67c72d415244b2287e7b8b1254ba98b`)
    
    res.render('news.ejs',{newsData : JSON.stringify(newsAPI.data)})
}
catch(error){
    if(error.res){
        console.log(error.res.data)
        console.log(error.res.status)
        console.log(error.res.headers)
    }
    else if(error.req){
        console.log(error.req)
    }
    else{
        console.log('error',error.message)
    }
}






})

module.exports = newsRouter