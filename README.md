#  11ty blog Amtech
## MitchellAnderson

### Base install commands
1. `git clone git@github.com:igavelyuk/11tyAmtechMitchellAnderson.git`
2. `npm install`


### How to use

###### Commands
- Global commans
  - Optimization: `npx @11ty/eleventy`
  - Live Server: `npx @11ty/eleventy --serve`
- Local (`in package.json`)
  - Optimization all: `npm run`
    - Optimization images only: `npm run:images`
    - Optimization css only:`npm run:css`
    - Optimization js only:`npm run:js`
    - Optimization fonts only:`npm run:fonts`
  - Live Server: `npm dev`

#### Packages
npm install --global del-cli

#### Links
- [11ly blog engine](https://www.11ty.dev/docs/)
with using
- [Nunchaksjs -> help page](https://mozilla.github.io/nunjucks/),
- [Markdown -> help page](https://www.markdownguide.org/basic-syntax/)

#### Packages used
- copyHTML -> Copy HTML from src to dist folder
  - (package: )
- compileStyles -> Compile SASS
  - (package: `npm install sass npm-run-all --save-dev` )
- copyCss -> autoprefix and minify css put to /dist/.../tmp/css
  - (package: `npm install clean-css`)
- cacheBust -> cache bust
  - (package: )
- oneCss -> make from all min.css files makes one all-min.css
  - (package: )
- minifyScripts -> minify js
  - (package: )
- purifyCss -> pass HTML export to filter classes from CSS
  - (package: )
- finalScript -> make from all min.js files makes one all-min.js
  - (package: )
- copyAllExceptCss -> in css folder can be extra resources, it copy to dist folder
  - (package: )
- copyFontsTTF -> copy fonts with optimizations from fonts folder
  - (package: )
- copyFontsWeb -> copy fonts with optimizations from webfonts folder
  - (package: )
- oneCssCompress -> compress all-min.css
  - (package: )
- optimizeImages -> optimize pictures
  - (package: `npm install @11ty/eleventy-img`)
- deleteTemps -> delete tmp folder (stored css)
  - (package: )
- purifyHtml -> removes all CSS and JS import s (package: )


README.md - `ver 0.0.3`
