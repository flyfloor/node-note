## Events

```
var EventEmitter = require('events').EventEmitter
var util = require('util')
function Dog(){
    console.log('new dog')
}
util.inherits(Dog, EventEmitter)

var dog = new Dog()

dog.on('bark', () => {
    console.log('bark')
})

dog.emit('bark')
```

### emit()

### once()

only emit once

### listeners()

return array of listeners 
