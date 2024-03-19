const { html } = require('../base/base');

console.log(html);
console.log(html.match(/<.+>.+<\/.+>/g));  // greedy
console.log(html.match(/<.+?>.+?<\/.+?>/g));  // non-greedy