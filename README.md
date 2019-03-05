# React-monorepo-boilerplate

React-monorepo-boilerplate frontend application constists of couple packages in a single monorepo.

`@rmb/ui`, `@rmb/data`, `@rmb/app`

To run npm scripts of some package, you can use:

- `yarn ui ...`
- `yarn data ...`
- `yarn app ...`

## Installing all dependencies in all packages

```
yarn && yarn lerna bootstrap
```

## Adding new dependencies to packages

- `yarn lerna add module-1 --scope=module-2` Install module-1 to module-2
- `yarn lerna add module-1 --scope=module-2 --dev` Install module-1 to module-2 in devDependencies
- `yarn lerna add module-1` Install module-1 in all modules except module-1
- `yarn lerna a add babel-core` Install babel-core in all modules

## Removing dependencies from packages

`yarn lerna exec --scope module-2 yarn remove module-1` Remove module-1 from module-2
