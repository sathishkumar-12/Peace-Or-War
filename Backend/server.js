const express=require('express')

//Peace or War app
const app = express()

app.get('/',(req,res)=>{
    res.json({mssg:'Hello World'})
})



app.listen(4000,()=>{
    console.log("Hello World !!");
}
)