**Create a TypeScript configuration file**
``` tsc --init ```

**Important Settings**

- **strict**
    - enabled by default
    - Enables the typescript type checking features

- **target**
    - enabled by deafult
    - Specifies the version of JavaScript that TypeScript compiler is going to generate

- **module**
    - enabled by default
    - Specifies the what kind of JavaScript you want to generate ? module or commonjs

- **rootDir**
    - disabled by default
    - It is a directory that contains source files

- **outDir**
    - disabled by default
    - It is a directory that contains JavaScript files

- **removeComments**
    - disabled by default
    - This will remove all the comments from the code

- **noEmitOnError**
    - Disabled by default
    - If any error in TypeScript code then compiler will not generate any JavaScript files to dist folder

**Shortcut to compile all files in project**
```tsc```