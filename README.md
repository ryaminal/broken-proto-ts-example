# broken-proto-ts-example
Run 
```bash
make build
```
Output should be a bunch of TS7056 errors e.g,.
```bash
gen/ts/buf/validate/validate.ts:2938:14 - error TS7056: The inferred type of this node exceeds the maximum length the compiler will serialize. An explicit type annotation is needed.
```

Current theory is that because in package.json we copy over the generated files for google `gen/ts/google` that this is causing recursion?

Hopefully someone can help find a better way to get around copying over the generated files for google.
