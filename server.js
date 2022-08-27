const express = require('express');
const app = express();
const PORT = process.env.PORT||80;
app.get('/',(req, res)=>{
    res.end('<h1>server work</h1>')
})

app.listen(PORT, ()=>{

})