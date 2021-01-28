# Deep Clone

Deep Clone is an ES6 JavaScript helper library used to provide the exact copy of JavaScript arrays or objects or any other reference types without address sharing. So you gonna get exact replica of the sent object on another location in the system memory

## Installation

Use the NPM.

```bash
npm i deep-clone-agenzzia
```

## Usage

```javascript
import DeepClone from 'deep-clone-agenzzia'

// somewhere in code
const copiedObj = DeepCLone(yourOriginalObj)

console.log(copiedObj)
console.log(yourOriginalObj)
console.log(copiedObj === yourOriginalObj) // should be false, objects aren't on the same address
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)