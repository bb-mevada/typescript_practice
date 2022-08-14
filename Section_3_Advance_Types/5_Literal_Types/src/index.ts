// Literal (Exact or Specific)

// let quantity: 50 = 51 // Error
// let quantity: 50 = 50

// let quantity: 50 | 100 = 100

type Quantity = 50 | 100;

let quantity: Quantity = 100;