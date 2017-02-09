## Basic

### global object

+ global: like window under browser

+ process: current process of node runtime, allow to manipulate

+ console: node console module, has standard in, out

### global function

+ settimeout: 1 milli seconds ~ 2,147,483,647 milli seconds

+ clearTimeout

+ setInterval

+ clearInterval

+ require: require module

+ Buffer: handle binary data

### global variable

+ __filename: current script's filename

+ __dirname: current script's directory

## module

### core module

+ http

+ url

+ fs

+ queryString

+ child_process

+ util

+ path

+ crypto

### custom module

module.exports 

## exception

### try catch

```
function async (cb, err) {
    setTimeout(() => {
        try {
            if (true) {
                throw new Error('woops')
            } else {
                cb('done')
            }
        } catch (e) {
            err(e)
        }
    }, 2000)
}

async(res => {
    console.log('success', res)
}, err => {
    console.error(err)
})
```

### callback  

```
function async (cb) {
    setTimeout(() => {
        try {
            let res = 42
            if (true) {
                throw new Error('woops')
            } else {
                cb(null, res)
            }
        } catch (err) {
            cb(err, null)
        }
    }, 2000)
}

async((error, res) => {
    if (error) {
        return console.log('error:', error)
    }
    console.log('success', res)
})
```

### EventEmitter error event

```
const EventEmitter = require('events').EventEmitter
const emitter = new EventEmitter()

emitter.on('error', err => {
    console.error('error:', err.message)
})

emitter.emit('error', new Error('wrong'))
```

### uncaughtException 

```
process.on('uncaughtException', err => {
    console.log('uncaught exception', err)
    process.exit(1)
})

try {
    setTimeout(() => {
        throw new Error('error')
    }, 200)
} catch(err) {
    console.log(err)
}
```

### unhandledRejection 

promise rejection

```
var http = require('http');

http.createServer(function(req, res) {
    var promise = new Promise(function(resolve, reject) {
        reject(new Error("Broken."))
    })
    promise.info = { url: req.url }
}).listen(8080)

process.on('unhandledRejection', function(err, p) {
    if (p.info && p.info.url) {
        console.log('Error in URL', p.info.url)
    }
    console.error(err.stack)
})
```

### executable

```
#!/usr/bin/env node
```
