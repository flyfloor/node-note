// process.on('message', m => {
//     console.log('child got message', m)
// })

// process.send({ foo: 'bar' })


var fs = require('fs');

function copy(file1, file2, done){
    let input = fs.createReadStream(file1)
    let output = fs.createWriteStream(file2)
    input.on('data', (d) => {
        output.write(d)
    })
    input.on('error', error => {
        throw error
    })
    input.on('end', () => {
        output.end()
        if (done) done()
    })
}

copy(process.cwd() + '/doc/fs.md', process.cwd() + '/tmp/fs.md')