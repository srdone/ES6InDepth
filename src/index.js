var target = {};
var handler = {
    get (target, key) {
        console.info(`Get on property"${key}"`);
        return target[key];
    }
};
var proxy = new Proxy(target, handler);
proxy.a = 'b';

console.log(proxy.a);

console.log(proxy.b);
