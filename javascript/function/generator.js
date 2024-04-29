
function* Counter() {
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 5;
}


const s = Counter();

console.log(s.next())
console.log(s.next())
console.log(s.next())
console.log(s.next())
console.log(s.next())
console.log(s.next())


console.dir(Counter)