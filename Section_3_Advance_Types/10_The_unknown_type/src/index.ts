// Valid in any type

// function render(document: any) {
//     document.move()
//     document.whateverWeWant()
// }

// Not valid in unknown type

function render(document: unknown) {

    // Narrowing

    // with premitive types
    if (typeof document === 'string') {
        document.toUpperCase()
    }

    // with custom types
    // if (document instanceof WordDocument) {
    //     document.toUpperCase()
    // }
}