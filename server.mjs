import express from 'express';
import path from 'path';
import cors from 'cors';

const app = express()
const port = process.env.PORT || 5001;

app.use(cors());
app.use(express.json());

app.get('/abc', (req, res) => {
    console.log("request ip: ", req.ip);
    res.send('Hello World! ' + new Date().toString());
})

//Url params:
//http://localhost:5001/weather/karachi/75600
// sequence did care
//app.get('/weather/:cityName/:zip', (req, res) => {

//query parameters:
// sequence didnot care
//http://localhost:5001/weather?cityName=karachi&zip=75600

// app.get('/weather' , (req, res) => {
// console.log(req.query.cityName)
// console.log(req.query.zip)

//we can also merge url and query param

// body:
// http://localhost:5001/weather
//{
//    cityName : "Karachi",
//    zip : 75600
//}

app.get('/weather/:cityName', (req, res) => {
    console.log("request ip: ", req.ip);
    console.log('param: ' , req.params.cityName)



    res.send({
        city : req.params.cityName,
        temp: 30,
        min: 26,
        max: 31,
        humidity: 20,
        serverTime: new Date().toString(),
        wind : 8
    });
})
app.get('/time', (req, res) => {
    console.log("request ip: ", req.ip);
    res.send('Hello World! ' + new Date().toString());
})

const __dirname = path.resolve();
app.use('/', express.static(path.join(__dirname, './web/build')))
app.use('*', express.static(path.join(__dirname, './web/build')))


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})