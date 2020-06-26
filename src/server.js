const express = require('express');
const path = require('path');
const server = express();

server.use(express.static('Public'));
//habilitar para o exepress receber o body
server.use(express.urlencoded({extended: true}));

///templete engine
const nunjucks = require('nunjucks');
nunjucks.configure("src/views",{
    express:server,
    noCache: true,
})

//banco de dados
const db = require('./database/db');
const { request } = require('https');

server.get('/',(resquest,response)=>{
    response.render('index.html');//função render utiliza o nunjucks
    return;
})
server.get('/create-point',(resquest,response)=>{
    response.render('create-point.html');
    return;
})
server.post('/save-point',(request,response)=>{
    
    //recebe os dados
   const values = [
        request.body.image,
        request.body.name,
        request.body.address,
        request.body.address2,
        request.body.state,
        request.body.city,
        request.body.items,
    ]

    const query = `
            INSERT INTO places(
                image,
                name,
                address,
                address2,
                state,
                city,
                items
            ) VALUES(?,?,?,?,?,?,?);
        `;
    db.run(query,values,function (err){
                    if(err){
                        console.log(err);
                        return response.render('create-point.html',{saved: false,
                        description: "Falha ao Gravar Dado,Por favor tente enviar novamente"});
                    }
        
                   
            return response.render('create-point.html',{saved: true});

    });
})


server.get('/search-results',(request,response)=>{

   const {city, state} = request.query;
    db.all(`SELECT * FROM places WHERE city LIKE '${city}' AND state LIKE '${state}' `,function(error, rows){
        if(error){
            return console.log(error);
        }
        const total = rows.length;
        return response.render('search-results.html',{places: rows , total});
    });
})



//iniciar servidor
server.listen(3000,function(){
    console.log("listing...");
}); ///servidor ligado na porta 3000
