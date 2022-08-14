function processEvents(message: string): never {
    while (true) {
        console.log(message)
    }
}

processEvents("...")

console.log("Hello")