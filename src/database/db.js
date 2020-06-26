const sqlite3 = require('sqlite3').verbose(); //torna as messagens mais verbosas

//criar o objeto do banco
    const db = new sqlite3.Database("./src/database/dabase.db");

//utilizar o objeto de banco de dados para as operações

     module.exports = db;

    // db.serialize(() =>{
    //     criar tabela
    //     db.run(`
    //         CREATE TABLE IF NOT EXISTS places (
    //             id  INTEGER PRIMARY KEY AUTOINCREMENT,
    //             image TEXT,
    //             name TEXT,
    //             address TEXT,
    //             address2 TEXT,
    //             state TEXT,
    //             city TEXT,
    //             items TEXT  
    //         );

    //     `) //templete string
    //     inserir dados
    //     const query = `
    //         INSERT INTO places(
    //             image,
    //             name,
    //             address,
    //             address2,
    //             state,
    //             city,
    //             items
    //         ) VALUES(?,?,?,?,?,?,?);
    //     `;
    //      const values = [
    //         "https://images.unsplash.com/photo-1567393528677-d6adae7d4a0a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    //         "Partilhar",
    //         "Guilherme de Embala, Jardim América",
    //         "Número 350",
    //         "Santa Catarina",
    //         "Rio do Sul",
    //         "Rêsidúos Eletrônicos,Lâmpadas"

    //     ] 
    //     db.run(query,values,function (err){
    //         if(err){
    //             return console.log(err);
    //         }

    //          console.log("cadastrado com sucesso!");
    //         console.log(this);
    //     });
    // // //    consultar dados
    //    db.all(`SELECT * FROM places WHERE id= ?`,[1],function(error, rows){
    //         if(error){
    //             return console.log(error);
    //         }

    //         console.log("Items Selecionado");
    //         console.log(rows);
    //    });
    //     deletar dados
//     db.run(`DELETE FROM places WHERE id = ?`,[5],function(error){
//         if(error){
//             return console.log(error);
//         }
//         console.log("deletado com sucesso!")
//     });
    
// });
   //rodar uma sequência de código