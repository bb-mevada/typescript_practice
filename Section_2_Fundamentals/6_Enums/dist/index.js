"use strict";
// Traditional Way of declaring constants
const small = 1;
const medium = 2;
const large = 3;
// PascalCase
// enum Size {Small, Medium, Large};
var Size;
(function (Size) {
    Size[Size["Small"] = 1] = "Small";
    Size[Size["Medium"] = 2] = "Medium";
    Size[Size["Large"] = 3] = "Large";
})(Size || (Size = {}));
;
// enum Size {Small="s", Medium="m", Large="l"};
// How to use values of enums ?
let mySize = Size.Medium;
console.log(mySize);
// More optimized enum
// const enum Size {Small=1, Medium=2, Large=3};
