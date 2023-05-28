// TYPESCRIPT FUNCTIONS
// TYPESCRIPT FUNCTIONS
// Return Type
function dates() {
    return new Date().getDay();
}
console.log(dates());
// Void Return Type
function sayHello() {
    console.log("Hello World!");
}
// Parameters
function sum(n1, n2) {
    return n1 + n2;
}
console.log(sum(4, 9));
// Optional Parameters
function add(n1, n2, n3) {
    return n1 + n2;
}
console.log(add(4, 12));
// Default Parameter
function mul(n1, n2) {
    if (n2 === void 0) { n2 = 20; }
    return n1 * n2;
}
console.log(mul(3.5));
//Named Parameters
function divide(_a) {
    var dividend = _a.dividend, divider = _a.divider;
    return dividend / divider;
}
console.log(divide({ divider: 8, dividend: 25 }));
// Rest Parameters
function adds(a, b) {
    var rest = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        rest[_i - 2] = arguments[_i];
    }
    return a + b + rest.reduce(function (n1, n2) { return n1 - n2; });
}
console.log(adds(21, 19, 18, 9, 12, 23, 4, 15, 29));
console.log(adds(121, 19, 22, 22));
console.log(adds);
// Type Alias ........?
// TYPESCTIPT CASTING
// TYPESCTIPT CASTING
// Casting with as
var x = "Hello";
console.log(x.length);
var y = 4;
console.log(y);
var z = 42;
console.log(z.length); // undefined
// Casting with <>
var a = "Hello World!";
console.log(a.length);
// Force Casting
var b = 'Hy User!';
console.log(b.length);
// let c = 'Hy User!'
// console.log(((c as unknown) as number).length) // Error
