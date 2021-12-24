function Interval(a, b) {
    return Math.floor(Math.random() * (a - b + 1) + b)
}

const rinterval = Interval(1, 50)
console.log(rinterval)