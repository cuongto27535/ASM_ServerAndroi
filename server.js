var express = require('express');
var app = express();
var expressHbs =require('express-handlebars');
app.engine(".hbs", expressHbs.engine({ extname: ".hbs", defaultLayout: null }));
app.set('view engine','.hbs');
app.use(express.static(__dirname+"/images"))
const bodyparser = require('body-parser')
const mongoose = require('mongoose')
const url = 'mongodb+srv://ToLeCuong:cuong2k32010@cluster0.t4dvo7u.mongodb.net/asmserver?retryWrites=true&w=majority'
const userController = require('./controllers/controller')



app.get('/', function(req, res){

    res.render('dangnhap');
});
app.get('/dangki', function(req, res){

    res.render('dangki');
});
app.get('/themsanpham', function(req, res){

    res.render('themsanpham');
});
app.get('/home', function(req, res){

    res.render('home');
});

// app.get('/danhsachnguoidung', function(req, res){

//     res.render('danhsachnguoidung');
// });
// app.get('/danhsachsanpham', function(req, res){

//     res.render('danhsachsanpham');
// });





app.get('/login',function(req, res){
    var email = req.query.email.toString();
    var password = req.query.password.toString();

    if(email=="cuongto@gmail.com" && password=="cuongto"){
        res.render('home');
    }else{
        res.send("Sai mật khẩu hoặc email");
    }
    
});

app.use(bodyparser.urlencoded({
    extended:true
}))
app.use(bodyparser.json())

mongoose.connect(url,{useUnifiedTopology:true, useNewUrlParser:true})//Kết nối cơ sở dữ liệu
app.use('/dssanphams',userController)



app.listen(process.env.PORT ||'9999');