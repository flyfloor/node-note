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
