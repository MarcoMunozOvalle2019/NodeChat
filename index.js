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

globaN1=0
globaV1=0
globaN2=0
globaV2=0
globaN3=0
globaV3=0
globaN4=0
globaV4=0
globaN5=0
globaV5=0
globaN6=0
globaV6=0
globaN7=0
globaV7=0
globaN8=0
globaV8=0
globaN9=0
globaV9=0
globaN10=0
globaV10=0

app.get('/act/:id1', async(req, res) => {
  let data=req.params.id1
  //io.emit('chat message', data);
  console.log('pidio1:', data)
//  res.json({marco:14})
  let leads = [globaN1, globaV1,globaN2, globaV2,globaN3, globaV3,globaN4, globaV4,globaN5, globaV5,globaN6, globaV6,globaN7, globaV7,globaN8, globaV8,globaN9, globaV9,globaN10, globaV10,]
  res.render('leads', {leads});  
});



app.get('/act3/:id1', async(req, res) => {
  console.log('be1',req.params)
  let data=req.params.id1
  globaN1 = data.split(':')[11].split(';')[0];
  globaV1 = data.split(':')[1].split(';')[0];
  globaN2 = data.split(':')[12].split(';')[0];
  globaV2 = data.split(':')[2].split(';')[0];
  globaN3 = data.split(':')[13].split(';')[0];
  globaV3 = data.split(':')[3].split(';')[0];
  globaN4 = data.split(':')[14].split(';')[0];
  globaV4 = data.split(':')[4].split(';')[0];
  globaN5 = data.split(':')[15].split(';')[0];
  globaV5 = data.split(':')[5].split(';')[0];
  globaN6 = data.split(':')[16].split(';')[0];
  globaV6 = data.split(':')[6].split(';')[0];
  globaN7 = data.split(':')[17].split(';')[0];
  globaV7 = data.split(':')[7].split(';')[0];
  globaN8 = data.split(':')[18].split(';')[0];
  globaV8 = data.split(':')[8].split(';')[0];
  globaN9 = data.split(':')[19].split(';')[0];
  globaV9 = data.split(':')[9].split(';')[0];
  globaN10 = data.split(':')[20].split(';')[0];
  globaV10 = data.split(':')[10].split(';')[0];
  io.emit('chat message', data);
  let leads = [globaN1, globaV1,globaN2, globaV2,globaN3, globaV3,globaN4, globaV4,globaN5, globaV5,globaN6, globaV6,globaN7, globaV7,globaN8, globaV8,globaN9, globaV9,globaN10, globaV10,]
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
