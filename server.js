var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles = {
  'article-one' : {
  heading : 'Key Loggers',
  date : '22 December 2016',
  content:`<p>Key loggers are the programs which record each and every keystroke on the computer they are installed on.It can store a complete log of text entered such as passwords,text copied and pasted,websites visited etc.User wont be aware of this key-spying software.Its usually used in cyber to get passwords of users and misuse it. Key-logger monitor screen will be opened only when particular 3 or 4 key combination will be pressed simultaneously.
		</p>` 
        },
  'article-two' : {heading : 'Whatsapp Spam',
  date : '1 November 2016',
  content:`<p> FEEL THE POWER OF PYTHON!!
           
		</p>` 
      
  }        
};


var counter=0; 

function createTemplate(data){
    var heading = data.heading;
    var content = data.content;
    var date = data.date;
    var htmlTemplate = `<!DOCTYPE html>
                <html>
                <head>
                	<title>${heading}</title>
                	<meta name="viewport" content="width-device-width, initial-scale=1"/>
                	<link rel="stylesheet" type="text/css" href="/ui/style.css"/>
                </head>
                
                <body>
                	<div class="container">
                
                	<a href="/" id="hme_btn">Home</a>
                	<div class="heading center">
                		<h3>${heading}</h3>
                	</div>
                	<div class="date">
                		<p>${date}<p>
                	</div>
                	<hr>
                	<div>
                		${content}	
                	</div>
                
                	</div>
                </body>
                </html>`;
    return htmlTemplate;
}



app.get('/counter', function(req,res) {
 counter +=1;
 res.send(counter.toString());   
});

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});


app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/hello', function(req,res) {
 res.sendFile(path.join(__dirname,'ui','hello.html'));   
});

var names = [];
app.get('/submit-name', function(req,res) {                 // /submit-name?name=xxxx
 var name = req.query.name;
 names.push(name);
 //JSON:JavaScript Object Notation
 res.send(JSON.stringify(names));   //array to string and send
});

app.get('/:articleName', function(req,res) {
    var articleName = req.params.articleName;
 res.send(createTemplate(articles[articleName]));   
});

/*
app.get('/article-two', function(req,res) {
 res.send("will be hosted shortly");   
});*/

// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80


var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
