# Building the Project

## Installation

Have `nodeJS` and `npm` installed.

Install `parcelJS` globally:
`yarn global add parcel-bundler` or `npm i -g parcel-bundler`.

`yarn install` or `npm install`

`yarn start` or `npm start` to serve app at http://localhost:1234

`yarn build` or `npm build` to build app at `./dist`

## Known Issues

**Issue**: `UnhandledPromiseRejectionWarning: Unhandled promise rejection (rejection id: 1): SyntaxError: 'super' keyword unexpected here`

**Solution**: Upgrade `nodeJS` and `npm`

## Notes and Learnings

### Import Images

```
// images/index.js
import Explore from './explore.png';
import Library from './library.png';
export default { Explore, Library };

// app.js
import images from '../images';
const explore = images.Explore;

import * as icons from '../icons';
`<img src={icons.Search} alt="" />`
```

## ParcelJS bits

 * `"prebuild": "shx rm -rf dist/*",` to
   [clean-up `dist`](https://golb.hplar.ch/p/Bundling-web-applications-with-Parcel)
   **NB! Clean up task completed with `node.prebuild.js` script**
 * [babelization](https://golb.hplar.ch/p/Bundling-web-applications-with-Parcel)
 * minification:
   [Use babel-minify instead of the old Uglify JS [171205]](https://github.com/parcel-bundler/parcel/issues/15) /
   [uglify-es](https://www.npmjs.com/package/uglify-es) // [babel-minify](https://github.com/babel/minify)
 * d824e24 resolved 'Uncaught ReferenceError: require is not defined'
   (partially, CityListService still raises the error).
   Error didn't cause app malfunctioning, just annoyed a lot.
   Solution was to remove from `index.html` inclusion of modules
   already imported from under `app.js`.

## PostCSS plug-ins

**Plug-ins**
 * `cssnano` - adjustable minificator
 * `postcss-assets` - image handling
 * `postcss-cssnext` - future features today
 * [`rucksack-css`](https://www.rucksackcss.org/) - easening
 * [style linting](https://www.sitepoint.com/improving-the-quality-of-your-css-with-postcss/)
 * `css-mqpacker` - css inliner
 * `autoprefixer`

**Collections**
 * [sitepoint](https://www.sitepoint.com/7-postcss-plugins-to-ease-you-into-postcss/)
 * [habra](https://habrahabr.ru/post/265449/)

## CDNization

 * [cdnizer](https://github.com/OverZealous/cdnizer)
 * [fallback to local copy](https://www.hanselman.com/blog/CDNsFailButYourScriptsDontHaveToFallbackFromCDNToLocalJQuery.aspx)