function voidFunction(): void {
    return ;
}

// Note: We can enable noUnusedParameters setting to detect unused parameters
// Note: We can enable noUnusedLocals setting to detect unused variables inside functions
// Note: We can enable noImplicitReturns setting to detect if we forgot to return a value
// function calculateTax(income:number): number {
    
//     if (income<50_000) {
//         return income*1.2;
//     }
//     return income*1.3;
// }

// Multiple Parameter

// function calculateTax(income:number, taxYear:number): number {
//     if (taxYear<2022) {
//         return income*1.2;
//     }
//     return income*1.3;
// }

// Optional Parameter
// function calculateTax(income:number, taxYear?:number): number {
//     if ((taxYear || 2022)<2022) {
//         return income*1.2;
//     }
//     return income*1.3;
// }

// Default Parameter
function calculateTax(income:number, taxYear:number = 2022): number {
    if ((taxYear || 2022)<2022) {
        return income*1.2;
    }
    return income*1.3;
}

calculateTax(10_000)