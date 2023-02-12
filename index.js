//en url delphi
//http://localhost:3000/act2/J1:Stock;J2:Stock%20Sale;J3:0035719061;N1:marco;N2:manuel;N3:heriberto;

// const app = require('express')();
const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const port = process.env.PORT || 3000;
const path = require('path');

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

globaN1=3
globaV1=4

app.get('/act/:id1', async(req, res) => {
  let data=req.params.id1
  //io.emit('chat message', data);
  console.log('pidio1:', data)
//  res.json({marco:14})
  let leads = [globaN1, globaV1]
  res.render('leads', {leads});  
});



app.get('/act3/:id1', async(req, res) => {
  console.log('be1',req.params)
  let data=req.params.id1
  globaN1 = data.split(':')[11].split(';')[0];
  globaV1 = data.split(':')[1].split(';')[0];
  io.emit('chat message', data);
  let leads = [globaN1, globaV1]
  //res.render('leads', {leads});
});

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')))

io.on('connection', (socket) => {
  console.log('es ',socket.id)
  socket.on('chat message', msg => {
    console.log('uuu',msg)
    io.emit('chat message', msg);
  });
  socket.on("disconnecting", (aa) => {
    console.log('mm1=',socket.rooms,aa); 
  });  

});

http.listen(port, () => {
  console.log(`Socket.IO server running at http://localhost:${port}/`);
});
