const express=require('express')
const app=express()

// addRequestDtae=(req,res,next)=>{
//     let opendate=new Date().getHours()
    
//     if (opendate>8 && opendate<17){
//         console.log('our office is not open now betwwen 8 and 17')
//     }
// // else {console.log('our office is open now')}
//     next()
// }

// app.use(date=(req,res,next)=> {
//     let opendate=new Date().getHours()
//     if (opendate>1 && opendate<19){
//                 console.log('our office is not open now betwwen 8 and 17')
//             }
//     next();
//   });
app.get('/', (req, res, next) => {
    let timenow = new Date().getHours()
    console.log(timenow)
    if ( timenow > 8 && timenow < 17 ) res.sendFile(__dirname + '/public/home.html'); 

    else {
        res.sendFile(__dirname + '/public/not_open.html');
    }
})

app.get('/home',(req,res)=>{
    res.sendFile(__dirname+'/public/index.html')
})
app.get('/contact',(req,res)=>{
    res.sendFile(__dirname+'/public/contact.html')
})
app.get('/ouerservice',(req,res)=>{
    res.sendFile(__dirname+'/public/ouerservices.html')
})
app.listen(3000,(err)=>{
    if(err) console.log('serveur is not runinig')
    else console.log('serveur is runing on port 3000')
})