
// See https://stackoverflow.com/a/31090240
const isBrowser = new Function("try {return this===window;}catch(e){ return false;}")();
const isNode = new Function("try {return this===global;}catch(e){return false;}")();
const isAngular = isBrowser && new Function("try {return window.angular !== undefined;}catch(e){ return false;}")();

if (isNode) {
	module.exports = require('./node/index.js');
} else if (isAngular) {
	module.exports = require('./angular/index.js');
} else {
	module.exports = require('./unknown/index.js');
}

// Support for ES6 export default style
if (module.exports.default) {
	module.exports = module.exports.default;
}
