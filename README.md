This parcel plugin checks if files included are case sensitive. 

This prevents bundling errors when a bundle is made on windows or mac and deployed on linux.


# Getting started

It uses regular [Parcel plugin system](https://parceljs.org/plugins.html), so you only have to install the plugin in your project. 

If you are using [yarn](https://yarnpkg.com/):
```bash
yarn add parcel-plugin-case-sensitive-path --dev
```

If you are using [npm](https://www.npmjs.com/):
```bash
npm install parcel-plugin-case-sensitive-path --save-dev
```

This command just installs `parcel-plugin-case-sensitive-path` in your `node_modules` folder and adds it to development dependency section in `package.json`:

```json
"devDependencies": {
    "parcel-plugin-case-sensitive-path": "^1.0.0"
}
```

# Configuration

There is no configurations that is required.

Files that are inspected are 

```
["js","jsx","ts","tsx","sccs","css"]
```

# Example of a bundle failure

This is an example of a build with a case insensitive file

```markdown
$ parcel build index.html
×  file C:\Projects\Parcel\example1\index.jsx is not case sensitive
    at CaseSensitiveChecker.addAsset (C:\Projects\Parcel\example1\node_modules\parcel-plugin-case-sensitive-path\case-sensitive.js:26:13)
    at Bundle._addDeps (C:\Projects\Parcel\example1\node_modules\parcel-bundler\src\Bundle.js:250:20)
    at Bundle._package (C:\Projects\Parcel\example1\node_modules\parcel-bundler\src\Bundle.js:219:18)
    at async Promise.all (index 0)
    at async Bundle.package (C:\Projects\Parcel\example1\node_modules\parcel-bundler\src\Bundle.js:202:5)
    at async Promise.all (index 2)
    at async Bundle.package (C:\Projects\Parcel\example1\node_modules\parcel-bundler\src\Bundle.js:202:5)
    at async Bundler.bundle (C:\Projects\Parcel\example1\node_modules\parcel-bundler\src\Bundler.js:325:27)
error Command failed with exit code 1.
```
