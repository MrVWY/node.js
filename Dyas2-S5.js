var template = require('./template-web');
var tp1str = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Document</title>
    </head>
    <body>
        <p>hello {{name}}</p>
    </body>
    </html>
`

var ret = template.render(tp1str,{
    name:'Jack'
})