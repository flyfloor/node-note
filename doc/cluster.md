## cluster

```
var cluster = require('cluster');
var os = require('os');
var http = require('http');

if (cluster.isMaster){
  var numWorkers = require('os').cpus().length;
   console.log('Master cluster setting up ' + numWorkers + ' workers...');

   for(var i = 0; i < numWorkers; i++) {
     cluster.fork();
   }

   cluster.on('online', function(worker) {
     console.log('Worker ' + worker.process.pid + ' is online');
   });

   cluster.on('exit', function(worker, code, signal) {
     console.log('Worker ' + worker.process.pid + ' died with code: ' + code + ', and signal: ' + signal);
     console.log('Starting a new worker');
     cluster.fork();
   });
} else {
  http.createServer(function(req, res) {
    res.writeHead(200);
    res.end("hello world\n");
  }).listen(8000);
}
```

### worker 对象

cluster.fork() create a worker process.

has attributes:

+ worker.id

unique process number, index of process in cluster.workers.

+ worker.process

worker is created by child_process.fork(), we can get process object by using worker.process

+ woker.send()

main process send message to child process.

### cluster.workers

it belongs to main process, list cluster's all workers, struct like { '1': Worker1, '2': Worker2, ... }

## cluster attr and method

### isMaster and isWorker

if `process.env.NODE_UNIQUE_ID` not exist, then is master cluster

### fork()

only master process can execute this method, will generate a new process

### kill()

kill a process

### listening event

```
cluster.on('listening', function (worker, address) {
  // worker, current worker
  console.log("A worker is now connected to " + address.address + ":" + address.port);
});
```

### reload process

first fork a new process, then kill all workers


