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

# Update(with solution)

Thanks to the awesome folks at Buf, a solution was found by altering the generation of the protobufs from the ts-proto package.

Solution: set the `useExactTypes` option to `false`. Easiest way is to do this in the `buf.gen.yaml` like:
```yaml
...
plugins:
  # full list of remote plugins at https://buf.build/plugins
  - plugin: buf.build/community/stephenh-ts-proto
    out: gen/ts-esm
    opt: 
      - useExactTypes=false
```
