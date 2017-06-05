var target = {};
var handler = {};
var proxy = new Proxy(target, handler);
proxy.a = 'b';

console.log(target.a);

console.log(proxy.c === undefined);
