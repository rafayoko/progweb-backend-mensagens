const express = require("express");
const app = express();

// Permissões
var cors = require('cors');
app.use(cors());
app.use(express.json());



// Porta que eu estou ouvindo
app.listen(process.env.PORT || 3000);

app.get('/hello', 
    function (req, res){    
        res.send("Hello World");
    }
);

app.get('/hello',
function (req, res){    
    res.send("Hello de Novo");
    }
)
let mensagens = [
    {
       nome: "Vitor Cintra", apelido: "Tafei", aniversario:"26/02/1997", materia_favorita:"física 3", jogo:"Civilization 6"
    },
    {
        nome: "Rafaela Yoko", apelido: "Rafa", aniversario:"01/11/1999", materia_favorita:"Circuitos Elétricos 1", jogo:"It Takes Two"
    }
     
];

app.get('/mensagens',
    function(req, res){
        //res.send(mensagens);
        res.send(mensagens.filter(Boolean));
    }
);

app.get('/mensagens/:id/:n/',
    function(req,res){
        let id = req.params.id - 1;
        res.send(mensagens[id][req.params.nn]);
    });
app.get('/mensagens/:id',
    function(req, res){
        const id = req.params.id - 1;
        const mensagem = mensagens[id];

        if (!mensagem){
            res.send("Mensagem não encontrada");
        } else {
            res.send(mensagem);
        }
    }
)

app.post('/mensagens', 
    (req, res) => {
        console.log(req.body.mensagem);
        const mensagem = req.body.mensagem;
        mensagens.push(mensagem);
        res.send("criar uma mensagem.")
    }
);

app.put('/mensagens/:id',
    (req, res) => {
        const id = req.params.id - 1;
        const mensagem = req.body.mensagem;
        mensagens[id] = mensagem;        
        res.send("Mensagem atualizada com sucesso.")
    }
)

app.delete('/mensagens/:id', 
(req, res) => {
    const id = req.params.id - 1;
    delete mensagens[id];

    res.send("Mensagem removida com sucesso");
}
);