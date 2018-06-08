# node-fqdn-sync
Node module to get FQDN synchronously from local machine (Linux support)

## Install

```
npm install @carto/fqdn-sync
```

## Usage

```javascript
const fqdn = require('fqdn-sync');

console.log("FQDN:", fqdn()); // foo.carto.net
console.log("FQDN:", fqdn.reverse()); // net.carto.foo
```
