const express = require('express');
const app = express();

//rotas
app.get('/', (request, response) => {
    console.log('servidor requisitado')
    return response.send('servidor respondeu')
});



app.listen(3333, () => { //3333 sera a porta em que o server vai estar
    console.log('testando servidor') //função que sera ativa quando o server iniciar
})