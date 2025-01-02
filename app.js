const ex=require('express')
const app=ex()
app.set('view engine','pug')
app.set('views','./views')
app.get('/greet2',(req,res)=>{
  res.render('greet', {name:"Mouna"})
})

const x = (req,res,next)=>{
  console.log('une requete a été envoyée à '+new Date().toISOString())
  next()
 }  
 app.use(x)

// ma premiere route 
app.get('/hello',(req,res) => {
  res.end("Hello !")
})
app.get('/greet/:username/:age',(req,res)=>{
  // npm init
  // npm i express --save
  // npm i
  // un fichier nommée app.js
  // http://localhost:8023/greet/Rima/23
  // telecharger postman
  res.status(200)
  res.set('Content-Type','text/html')
  res.send( `<html><body> <h1> Hi ${req.params.username}
     votre age est ${req.params.age} </h1>  </body> </html>`)

})

app.route('/book')
.get((req,res) => {
  res.send("get Books")
})
.post( (req,res)=>{
  res.send("Insert Book")
 })
 .put( (req,res)=>{
  res.send('update Book')
 })
 .delete((req,res)=>{
  res.send("Delete Book !")
  } )

app.post('/test',(req,res) => {
  res.send("Test Example")
})


/*app.get('*',(req,res) => {
  res.status(404)
  res.send('page non touvé 404 !')
})
*/
app.listen(8023)