const express = require('express')
const bodyParser = require('body-parser')
const MongoClient = require('mongodb').MongoClient
const app = express()

app.set('view engine', 'ejs')

var db

MongoClient.connect('mongodb://samples:12345@ds157342.mlab.com:57342/samples2017', (err, database) => {
	if(err) return console.log(err)
	db = database
    
	//app.listen(3000, () => {
	//	console.log('Listening on 3000')
	//})
})

app.listen(3000, function(){
	console.log('Listening on 3000')
})

app.use(bodyParser.urlencoded({extended: true}))

app.get('/', (req, res)=>{
	//res.send('Hello world')
	//res.sendFile(__dirname + '/index.html')
	var cursor = db.collection('quotes').find().toArray(function(err, result){
	  if(err) return console.log(err)
	  res.render('index.ejs', {quotes: result})	  
	})
})

app.post('/quotes', (req, res) => {
	//console.log(req.body)
	db.collection('quotes').save(req.body, (err, result) => {
	  if(err) return console.log(err)
		
	  console.log('Saved to database')
	  res.redirect('/')
	})
})

