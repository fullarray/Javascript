const express = require('express')
const bodyParser = require('body-parser')
const MongoClient = require('mongodb').MongoClient
const app = express()
app.set('view engine', 'ejs')

var URL = 'mongodb://localhost:27017/test'
var db

MongoClient.connect(URL, (err, database) => {
	if(err) return console.log(err)
    db = database
	//console.log("Database created!")
	//db.close()
	app.listen(3000, function(){
		console.log('All good!. Still listening on 3000')
    })
})

app.use(bodyParser.urlencoded({extended: true}))

app.get('/', (req, res) => {
	var cursor = db.collection('quotes').find().toArray(function(err, results){
		//console.log(results)
		if(err) return console.log(err)
		res.render('index.ejs', {quotes: results})
	})
	
	//res.sendFile(__dirname + '/index.html')
	//res.send('Hello World')
})

app.post('/quotes', (req, res) => {
	db.collection('quotes').save(req.body, (err, result) => {
		if(err) return console.log(err)
	
         console.log('saved to database')
		 res.redirect('/')
    })
	
	//console.log(req.body)
})



//console.log(__dirname);