#!/usr/bin/env node

// process.stdin.setEncoding('utf8');
// process.stdin.on('readable', () => {
//     let chunk = process.stdin.read()
//     if (chunk) {
//         process.stdout.write(`data: ${chunk}`)
//     }
// })

// process.stdin.on('end', () => {
//     process.stdout.write('end')
// })

// function async (cb) {
//     setTimeout(() => {
//         try {
//             let res = 42
//             if (true) {
//                 throw new Error('woops')
//             } else {
//                 cb(null, res)
//             }
//         } catch (err) {
//             cb(err, null)
//         }
//     }, 2000)
// }

// async((error, res) => {
//     if (error) {
//         return console.log('error:', error)
//     }
//     console.log('success', res)
// })

// const EventEmitter = require('events').EventEmitter
// const emitter = new EventEmitter()

// emitter.on('error', err => {
//     console.error('error:', err.message)
// })

// emitter.emit('error', new Error('wrong'))

// process.on('uncaughtException', err => {
//     console.log('uncaught exception', err)
//     process.exit(1)
// })

// try {
//     setTimeout(() => {
//         throw new Error('error')
//     }, 200)
// } catch(err) {
//     console.log(err)
// }

// var http = require('http');

// http.createServer(function(req, res) {
//     var promise = new Promise(function(resolve, reject) {
//         reject(new Error("Broken."))
//     })

//     promise.info = { url: req.url }
// }).listen(8080)

// process.on('unhandledRejection', function(err, p) {
//     if (p.info && p.info.url) {
//         console.log('Error in URL', p.info.url)
//     }
//     console.error(err.stack)
// })

// const child_process = require('child_process')
// const n = child_process.fork('./child.js')

// n.on('message', m => {
//     console.log('parent got message', m)
// })

// n.send({ hello: 'world'})

// var cluster = require('cluster');
// var os = require('os');
// var http = require('http');

// if (cluster.isMaster){
//   var numWorkers = require('os').cpus().length;
//    console.log('Master cluster setting up ' + numWorkers + ' workers...');

//    for(var i = 0; i < numWorkers; i++) {
//      cluster.fork();
//    }

//    cluster.on('online', function(worker) {
//      console.log('Worker ' + worker.process.pid + ' is online');
//    });

//    cluster.on('exit', function(worker, code, signal) {
//      console.log('Worker ' + worker.process.pid + ' died with code: ' + code + ', and signal: ' + signal);
//      console.log('Starting a new worker');
//      cluster.fork();
//    });
// } else {
//   http.createServer(function(req, res) {
//     res.writeHead(200);
//     res.end("hello world\n");
//   }).listen(8000);
// }

// var cluster = require('cluster');
// console.log(process.env.NODE_UNIQUE_ID)

// var EventEmitter = require('events').EventEmitter
// var util = require('util')
// function Dog(){
//     console.log('new dog')
// }
// util.inherits(Dog, EventEmitter)

// var dog = new Dog()

// dog.on('bark', () => {
//     console.log('bark')
// })

// dog.emit('bark')