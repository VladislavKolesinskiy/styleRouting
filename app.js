const fs = require('fs');
const express = require('express')
const path = require('path')
const server = express()
const PORT = 3000
const createPath = (page) => path.resolve(__dirname, 'pages-ejs', `${page}.ejs`)

server.set('view engine', 'ejs')
server.use(express.static(path.join(__dirname, 'pages-ejs')));
server.listen(PORT, function(err){
	if (err) console.log("Error in server setup")
	console.log("Server listening on Port", PORT);
})

server.get('/', (req, res) => {
    res.render(createPath('index'), {})
})

server.get('/list', (req, res) => {
	fs.readFile('data.json', (err, data) =>{
		datalist = JSON.parse(data);
		res.render(createPath('list'),  { users: datalist })
	})
})
server.get('/list2', (req, res) => {
	fs.readFile('data.json', (err, data) =>{
		datalist = JSON.parse(data);
		res.render(createPath('list2'),  { users: datalist })
	})
})
server.get('/list3', (req, res) => {
    res.redirect('/');
});
server.get('*', (req, res) => {
	res.render(createPath('error'), {})
})
