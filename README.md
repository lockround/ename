# EnameJS

> EnameJS is a tiny javascript library for renaming files in a logical way.


# Usage

```js

var ename = require('ename');

ename.rename("funny.jpg", "un", true); //funny.jpg changed to un-funny.jpg

```

## Installation

This is a [Node.js](https://nodejs.org/en/) module available through the
[npm registry](https://www.npmjs.com/).

Before installing, [download and install Node.js](https://nodejs.org/en/download/).
Node.js.

Installation is done using the
[`npm install` command](https://docs.npmjs.com/getting-started/installing-npm-packages-locally):

```bash
$ npm install ename
```

## API

### getFiles(dirname)

#### dirname

This is the directory in which you want to rename files.

``` protip: __dirname will get all the files of current directory. ```

This returns an array of file names of the directory specified.

Example: 

```js

var ename = require("ename");

console.log(ename.getFiles(__dirname));

//logs array of file names of this current directory through which this script is  running.

```

### rename(filename, regex, boolean)

This will be used to rename a single file.

#### filename

This is the name of the file with extension.

Example: funny.jpg

#### regex

regex will be passed as a string it will automatically generate regex from that string. This regex will be tested over filename.

Example: "un" in funny.jpg

#### boolean

this boolean will determine whether you want to append that regex string before filename with hyphen of ignore this addition.

##### Example: Putting it all together

```js

var ename = require("ename");

ename.rename("funny.jpg", "un", true);

//funny.jpg changed to un-funny.jpg

```


### renameAll(files, regex)

#### files 

The array of file names we got from getFiles method.

#### regex

regex will be passed as a string it will automatically generate regex from that string. This regex will be tested over all files.

#### Example: "un" in funny1.jpg & funny2.jpg

### Get in Touch

* [#ename](https://gitter.im/lockround/ename) on Gitter
* [@lockround](https://twitter.com/lockround) on [Codementor](https://www.codementor.io/lockround)


### License

Copyright © 2017 Shubham Tiwari. This source code is licensed under the MIT license found in
the [LICENSE.txt](https://github.com/lockround/ename/blob/master/LICENSE.txt) file.
The documentation to the project is licensed under the [CC BY-SA 4.0](http://creativecommons.org/licenses/by-sa/4.0/)
license.


---
Made with ♥ by Shubham Tiwari ([@lockround](https://twitter.com/lockround)) and [contributors](https://github.com/lockround/ename/graphs/contributors)
