
1. Checkout and `npm install`
2. Run `npm run dev` for live reloading environment served from pages/ folder.
3. Change _package.json_ --out-dir for watch and build scripts.
    3.1. watch is a live loading environment used to output code into you local webserver. 
    3.2. build should be building into a folder in the solution.
    3.3. If needed change the --public-url part.
4. Change target version of javascript in _tsconfig.json_ file.
5. Change target browsers in _package.json_ under [browserslist](https://github.com/browserslist/browserslist)

More [parcel documentation](https://parceljs.org/cli.html)
Addons can be found at [awesome parcel](https://github.com/parcel-bundler/awesome-parcel#plugins)
