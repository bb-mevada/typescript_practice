// Here we are allowing function parameter can be of null or undefined types using union operator

function greet(name: string | null | undefined) {
    if (name)
    console.log(name);
    else
    console.log("Hey");
}

greet(null)