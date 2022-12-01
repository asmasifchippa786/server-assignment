import express from 'express';
import path from 'path'
const app = express()
const port = process.env.PORT  || 3000

app.get('/abc', (req, res) => {
    console.log("requet ip: " , req.ip);
    res.send('Hello there! I am Here , My Name is M.Anas Asif ' + new Date().toString())
})
app.get('/getweather', (req, res) => {
  console.log("requet ip: " , req.ip);
  res.send('Hello there! I am Here , My Name is M.Anas Asif ' + new Date().toString())
})
app.get('/gettime', (req, res) => {
  console.log("requet ip: " , req.ip);
  res.send('Hello there! I am Here , My Name is M.Anas Asif ' + new Date().toString())
})
const  __dirname = path.resolve()
app.use('/', express.static(path.join(__dirname , './server/build')))
app.use('*', express.static(path.join(__dirname , './server/build')))


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})