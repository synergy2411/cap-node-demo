var app = require("express")();
var cookieSession = require("cookie-session");


//HTML5 : Session Storage
app
    .use(cookieSession({ keys: ['my secret key'] }))
    .use('/home', function (req, res) {
        if (req.session.views) {
            req.session.views++;
        }
        else {
            req.session.views = 1;
        }
        res.end('Total views for you: ' + req.session.views);
    })
    .use('/reset', function (req, res) {
        delete req.session.views;
        res.end('Cleared all your views');
    })
    .listen(3030);
