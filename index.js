const express = require('express');
const app = express()
const cors = require('cors')
const port = process.env.PORT || 5000;



app.use(cors())

app.get( '/', (req, res) => {
    res.send ('dragon rening')
})

const catagory =require ('./data/Catagorie.json')

app.get('/catagory', (req, res) => {
    res.send(catagory)
})
// app.listen(port, () => {
    // console.log(`Example app listening on port ${port}`)
//   })

app.listen(port, () =>{
    console.log('Example app listening on port ${port}')
})

  