## express

express is a web framework based on node.js

### use()

use middleware

```
app.use('/', function(req, res, next){
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Welcome to the homepage!\n");
```

### router

```
app.get('/', function(req, res, next){
    res.send('index page')
})
```

### Operation principle

express is based on http module


### response 

#### response.redirect

#### response.sendFile

#### response.render


### request

#### request.ip

#### request.files

### Express.Router
