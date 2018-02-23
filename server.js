var express = require('express');
var app = express();
app.set('view engine', 'pug');
app.set('views','./views');


app.get('/log_in', function(req, res){
    res.render('content.pug');
});

app.get('/auth/google', function(req, res){
    res.render('logForm.pug');
});


var server = app.listen(3000, function() {
    console.log('Przykładowa aplikacja nasłuchuje na http://localhost:3000');
});

app.use(function (req, res, next) {
    res.status(404).send('BŁĄD 404. Wybacz, nie mogliśmy odnaleźć tego, czego żądasz!')
});