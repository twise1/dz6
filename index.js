const card = [
    {
        id:1,
        number: 4098584411112222
    },
    {
        id:2,
        number: 4098584411113333
    },
    {
        id:3,
        number: 4098584411114444
    },
    {
        id:4,
        number: 4098584411115555
    },
    {
        id:5,
        number: 4098584411116666
    },
];

const express = require("express");
const app = express();
app.get('/card/:id', function (request,response){
    response.send(JSON.stringify(card.find((item) => item.id == request.params.id)));
})
app.listen(3000, function (){
    console.log("Сервер запущен под номером 3000");
}
);