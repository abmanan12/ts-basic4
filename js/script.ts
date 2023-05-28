// TYPESCRIPT FUNCTIONS
// TYPESCRIPT FUNCTIONS


// Return Type
function dates():number {
    return new Date().getDay()
}
console.log(dates())


// Void Return Type
function sayHello(): void {
    console.log("Hello World!") 
}


// Parameters
function sum(n1:number, n2:number): number {
    return n1 + n2
}
console.log(sum(4,9))


// Optional Parameters
function add(n1:number, n2:number, n3?:number): number {
    return n1 + n2
}
console.log(add(4,12))


// Default Parameter
function mul(n1:number, n2:number = 20) {
    return n1 * n2
}
console.log(mul(3.5))


//Named Parameters
function divide({dividend, divider} : {dividend: number, divider: number}) {
    return dividend / divider
}
console.log(divide({divider: 8, dividend: 25}))


// Rest Parameters
function adds(a: number, b: number, ...rest: number[]) {
    return a + b + rest.reduce((n1, n2) => n1 - n2)
}
console.log(adds(21, 19, 18, 9, 12, 23, 4, 15, 29))
console.log(adds(121, 19, 22, 22))
console.log(adds)


// Type Alias ........?




// TYPESCTIPT CASTING
// TYPESCTIPT CASTING

// Casting with as
let x : unknown = "Hello"
console.log((x as string). length)

let y: unknown = 4
console.log(y as number)

let z: unknown = 42
console.log((z as string).length)  // undefined

// Casting with <>
let a: unknown = "Hello World!"
console.log((<string> a).length)

// Force Casting
let b = 'Hy User!'
console.log(((b as unknown) as string).length)

// let c = 'Hy User!'
// console.log(((c as unknown) as number).length) // Error
