"use strict";
// We can define shape of the object using type aliases
let employee = {
    id: 1,
    name: "",
    retire: (date) => {
        console.log(date);
    }
};
console.log(employee);
