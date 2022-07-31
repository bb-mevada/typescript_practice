// let employee: {
//     id: number,
//     name: string
// } = {id:1, name:"Bhavesh"}

// employee.name = "BB"

// Optional Property

// let employee: {
//     id: number,
//     name?: string
// } = {id:1, name:"Bhavesh"}

// employee.name = "BB"

// but it's not a good practice to make a property optional so we will can assign a empty string

// let employee: {
//     id: number,
//     name: string
// } = {id:1, name:""}

// employee.name = "BB"

// Readonly properties

// let employee: {
//     readonly id: number,
//     name: string
// } = {id:1, name:""}

// employee.name = "BB"
// employee.id = 2

// Functions in object

let employee: {
    readonly id: number,
    name: string,
    retire: (date: Date) => void
} = {
    id:1, 
    name:"", 
    retire: (date: Date) => {
        console.log(date);
    }
}
console.log(employee)