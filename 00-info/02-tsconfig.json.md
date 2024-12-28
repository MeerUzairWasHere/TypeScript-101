# tsconfig.json Configuration

[tsconfig](https://www.typescriptlang.org/tsconfig)

This project's TypeScript configuration is defined in the `tsconfig.json` file. Here's a breakdown of the configuration options:

- `include`: Set to `["src"]`. This tells TypeScript to only convert files in the `src` directory.

- `target`: Set to `ES2020`. This is the JavaScript version that the TypeScript code will be compiled to.

- `useDefineForClassFields`: Set to `true`. This enables the use of the `define` semantics for initializing class fields.

- `module`: Set to `ESNext`. This is the module system for the compiled code.

- `lib`: Set to `["ES2020", "DOM", "DOM.Iterable"]`. This specifies the library files to be included in the compilation.

- `skipLibCheck`: Set to `true`. This makes TypeScript skip type checking of declaration files (`*.d.ts`).

- `moduleResolution`: Set to `bundler`. This sets the strategy TypeScript uses to resolve modules.

- `allowImportingTsExtensions`: Set to `true`. This allows importing of TypeScript files from JavaScript files.

- `resolveJsonModule`: Set to `true`. This allows importing of `.json` modules from TypeScript files.

- `isolatedModules`: Set to `true`. This ensures that each file can be safely transpiled without relying on other import/export files.

- `noEmit`: Set to `true`. This tells TypeScript to not emit any output files (`*.js` and `*.d.ts` files) after compilation.

- `strict`: Set to `true`. This enables all strict type-checking options.

- `noUnusedLocals`: Set to `true`. This reports an error when local variables are declared but never used.

- `noUnusedParameters`: Set to `true`. This reports an error when function parameters are declared but never used.

- `noFallthroughCasesInSwitch`: Set to `true`. This reports an error for fall through cases in switch statements.
