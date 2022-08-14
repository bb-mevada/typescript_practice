type Customer = {
    birthday?: Date
}

function getCustomer(id: number):Customer | null | undefined {
    return id === 0 ? null : {birthday: new Date()}
}

let customer = getCustomer(0) // 1

// Optional Property Access Opeartor - Used with objects
console.log(customer?.birthday);

// Optional Element Access Opearator - Used with arrays
// console.log(customers?.[0])

// Optional Call
// let log: any = null;
// log?.('a')