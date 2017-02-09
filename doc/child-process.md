## Child process

### exec

```
var exec = require('child_process').exec;

var ls = exec('ls -l', function (error, stdout, stderr) {
  if (error) {
    console.log(error.stack);
    console.log('Error code: ' + error.code);
  }
  console.log('Child Process STDOUT: ' + stdout);
});
```

+ `exec`create a new child process, cached operation result, and run callback function after execution.

+ `exec`function accept two arguments, first is shell command string, second is callback function, accept three arguments, which are occured error, standard output and standard outout error.

+ both stdout and stderr are stream, can listen to data event:

```
var exec = require('child_process').exec;
var child = exec('ls -l');

child.stdout.on('data', function(data) {
  console.log('stdout: ' + data);
});
child.stderr.on('data', function(data) {
  console.log('stdout: ' + data);
});
child.on('close', function(code) {
  console.log('closing code: ' + code);
});
```

`exec` directly invoke bash to interpretate command, so if has user input arguments, exec is unsafe.

### execSync

### execFile

arguments is array, not interpretate by bash, higher security.

### spawn

```
var child_process = require('child_process');
var path = '.';
var ls = child_process.spawn('/bin/ls', ['-l', path]);
ls.stdout.on('data', function (data) {
  console.log('stdout: ' + data);
});

ls.stderr.on('data', function (data) {
  console.log('stderr: ' + data);
});

ls.on('close', function (code) {
  console.log('child process exited with code ' + code);
});
```

### fork

create a child process, execute with node, difference between spawn is that will create a communication pipe, allow to interacte with parent process