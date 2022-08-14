// | symbol in typescript is union type

function kgToLbs(weight: number | string): number {
    // Here we will see common methods of number and string because weight parameter can be either string or number
    // Here we can use a special technique called Narrowing to specify the type

    if (typeof weight === 'number') {
        // Here we can see all the methods available for number
        return weight * 2.2
    }
    else {
        // Here we can see all the methods available for string
        return parseInt(weight) * 2.2
    }
}

console.log(kgToLbs(10))
console.log(kgToLbs("10"))