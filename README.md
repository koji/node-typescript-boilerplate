# typescript-node-boilerplate

This is a boilerplate for nodejs project with typescript.  
The followings are details of this boilerplate.

blog post for this

## npm-script

The commands are ordered alphabetically.

#### `yarn clean`

This command will clean up dist folder that is for build files(.js files)

```zsh
"clean": "rimraf dist/*",
```

#### `yarn dev:watch`

This commands allows run index.ts file without compile and monitor the changes on the file

```zsh
"dev:watch": "ts-node-dev --respwn src/index.ts",
```

#### `yarn dev`

This commands allows run index.ts file without compile

```zsh
"dev": "ts-node src/index.ts",
```

#### `yarn format`

This commands will format all files with the rules that are based on `.eslintrc.js`

```zsh
"format": "prettier --write 'src/**/*.{js,ts,json}'",
```

#### `yarn lint:all`

This command will lint all ts files and run `tsc` without generating any .js files

```zsh
"lint:all": "yarn lint && yarn tscCheck",
```

#### `yarn lint:fix`

This command runs `lint` and modify codes to fix lint errors.

```zsh
"lint:fx": "eslint src/**/*.ts --fix",
```

#### `yarn lint`

This command check all ts files with the rules that are based on `.eslintrc.js`

```zsh
"lint": "eslint src/**/*.ts",
```

#### `yarn start`

This command compiles ts files and run build file which is `dist/index.js`

```zsh
"start": "tsc && node dist/index.js",
```

#### `yarn tsc`

This compands ts files

```zsh
"tsc": "tsc",
```

#### `yarn tscCheck`

This command shows tsc compile errors if there are any issues.

```zsh
"tscCheck": "tsc --noEmit"
```

## Machine info I used to set up this

Here is my environmental information. Basically, this repo is using `yarn` as a package manager.

```zsh
$ node -v
v18.13.0

$ npm -v
8.19.3

$ yarn -v
1.22.19

$ pnpm -v
8.1.1

$ uname -a
Darwin WS-FVFGW0FRQ05N 22.3.0 Darwin Kernel Version 22.3.0: Mon Jan 30 20:39:35 PST 2023; root:xnu-8792.81.3~2/RELEASE_ARM64_T8103 arm64

$ sw_vers
ProductName:	macOS
ProductVersion:	11.0
BuildVersion:	20A5354i
```

## TypeScript version

```zsh
$ npx tsc -V
Version 5.0.3
```

## ESLint + Prettier

```zsh
$ ./node_modules/.bin/eslint --version
v8.37.0

$ ./node_modules/.bin/prettier --version
2.8.7
```
