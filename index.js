const express = require("express");
const app = express();

// Permissões
var cors = require('cors');
app.use(cors());
app.use(express.json());


// Porta que eu estou ouvindo
app.listen(process.env.PORT || 3000);

app.get('/', 
    function (req, res){    
        res.send("Aplicativo da Rafaela Yoko");
    }
);

//app.get('/hello',
//function (req, res){    
  //  res.send("Hello de Novo");
   // })
let mensagens = [
    {titulo: "Vikings", status:"Finalizado", anolancamento:"2013"}
];

app.get('/mensagens',
    function(req, res){
        //res.send(mensagens);
        res.send(mensagens.filter(Boolean));
    }
);

app.get('/mensagens/:id',
    function(req, res){
     let id = req.params.id - 1;
      let mensagem = mensagens[id];

        if (!mensagem){
            res.send("Mensagem não encontrada");
        } else {
            res.send(mensagem);
        }
    }
)

app.post('/mensagens', 
    (req, res) => {
        console.log(req.body);
       let mensagem = req.body;
        mensagens.push(mensagem);
        res.send("criar uma mensagem.")
    }
);

app.put('/mensagens/:id',
    (req, res) => {
        let id = req.params.id - 1;
        let mensagem = req.body;
        mensagens[id] = mensagem;        
        res.send("Mensagem atualizada com sucesso.")
    }
)

app.delete('/mensagens/:id', 
(req, res) => {
    let id = req.params.id - 1;
    delete mensagens[id];

    res.send("Mensagem removida com sucesso");
}
);