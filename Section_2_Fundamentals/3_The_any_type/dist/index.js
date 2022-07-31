"use strict";
// If you use the function below the typescript compiler will show a compilation error that parameter document implicitly has an any type
/*
function render(document) {
    console.log(document);
}
*/
// To avoid the error in function above we can annotate the any type to the parameter document like below
/*
function render(document:any) {
    console.log(document);
}
*/
// Now what if our legacy javascript project has lot of functions which has parameters with type any ?
// we can enable the noImplicitAny setting and set it to false from the tsconfig.json file
// After updating the setting the below function will work
function render(document) {
    console.log(document);
}
