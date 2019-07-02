# SAFE-JSON-PARSER

## Install

```bash
yarn add safe-jsonparser
```

## Usage

```js
import safeJsonParse from 'safe-jsonparser'
//or
const safeJsonParse = require('safeJsonParse')

// valid json string
safeJsonParse('{"a":1}') // return {a: 1}

// invalid json string
safeJsonParse('{"a:1}') // return undefined

// invalid json string with error callback
safeJsonParse('{"a":1}', console.error) // return undefined and log error
```
