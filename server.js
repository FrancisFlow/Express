const express = require('express');

const app = express();
const port = 3000;

app.get('/', (req, res)=>{
res.send('<h1>Hello World</h1>');
})

app.get('/about', (req, res)=>{
    res.send('<h1>Bio</h1> <h3> I am a great learner and a man in love with technology. Grant me wings, my beloved code. </h3>')
})
app.get('/contact', (req, res)=>{
    res.send('<h1>Contact me at : francisngigi948@gmail.com</h1>')
})

app.listen(3000, ()=>{
    console.log('listening on port 3000');
});