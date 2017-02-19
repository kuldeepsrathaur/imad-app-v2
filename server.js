var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles={
    'article-one' :{ 
    title: 'Atricle Three',
    heading: 'Article Three',
    date: 'Sep 20 2016',
    content:         
     `   <p>
            This is Article - three. This is Article - three.This is Article - three.This is Article - three.This is Article - three.This is Article - three.This is Article - three.This is Article - three.This is Article - three.This is Article - three.This is Article - three.This is Article - three.This is Article - three.This is Article - three.This is Article - three.This is Article - three.This is Article - three.This is Article - three.This is Article - three.This is Article - three.This is Article - three.This is Article - three.
            </p> `
},
    'article-two' : {
     title: 'Atricle Two',
    heading: 'Article Two',
    date: 'Sep 18 2016',
    content:         
     `   <p>
            This is Article - two. This is Article - two. This is Article - two. This is Article - two. This is Article - two. This is Article - two. This is Article - two. This is Article - two. This is Article - two. This is Article - two. This is Article - two.
            </p>
            <p>
            This is Article - two. This is Article - two. This is Article - two. This is Article - two. This is Article - two. This is Article - two. This is Article - two. This is Article - two. This is Article - two. This is Article - two. This is Article - two.
            </p> `
},   
    'article-three' : {
    title: 'Atricle Three',
    heading: 'Article Three',
    date: 'Sep 20 2016',
    content:         
     `   <p>
            This is Article - three. This is Article - three.This is Article - three.This is Article - three.This is Article - three.This is Article - three.This is Article - three.This is Article - three.This is Article - three.This is Article - three.This is Article - three.This is Article - three.This is Article - three.This is Article - three.This is Article - three.This is Article - three.This is Article - three.This is Article - three.This is Article - three.This is Article - three.This is Article - three.This is Article - three.
            </p> `
}
};

function createTemplate(data)
{
    var title= data.title;
    var heading= data.heading;
    var date= data.date;
    var content= data.content;

var htmlTemplate=
` <html>
    <head>
        <title>
            ${title}
        </title>
       <link href="/ui/style.css" rel="stylesheet" />
    </head>
    <body>
        <div class="container">
        <div>
            <a href="/">Home</a>
        </div>
        <div>
            <h3>${heading}</h3>
        </div>
        <div>
            ${date}
        </div>
        <div>
        ${content}
         </div>
        </div>
    </body>
</html>
`;
return htmlTemplate;
}
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/article-one.html', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'article-one.html'));
});

app.get('/:articlename', function (req, res) {
    var articlename=req.params.articlename;
  res.send(createTemplate(articles[articlename]));
});

app.get('/ui/article-three.html', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'article-three.html'));
});
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
