// Traditional Way of declaring constants

const small = 1;
const medium = 2;
const large = 3;

// PascalCase
// enum Size {Small, Medium, Large};
enum Size {Small=1, Medium=2, Large=3};
// enum Size {Small="s", Medium="m", Large="l"};

// How to use values of enums ?
let mySize: Size = Size.Medium;
console.log(mySize)

// More optimized enum
// const enum Size {Small=1, Medium=2, Large=3};