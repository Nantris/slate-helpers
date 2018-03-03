# slate-plugins [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url]

[![Greenkeeper badge](https://badges.greenkeeper.io/Canner/slate-plugins.svg)](https://greenkeeper.io/)
> slate plugin collections

## Installation

```sh
$ npm install --save slate-plugins
```

## Usage

```js
var slatePlugins = require('slate-plugins');

// access blocks
slatePlugins.blocks;
// access inlines
slatePlugins.inlines;
// access marks
slatePlugins.marks;

```

## Plugins

### Blocks

#### `addDataToCurrent`

`addDataToCurrent(state: State, data: Object)`

This update current type with additional data, this could be useful in align...

#### `blockquote`

`blockquote(state: State, options: Object)`

This plugin is based on https://github.com/GitbookIO/slate-edit-blockquote, will wrapped block quote if the selection is not within a blockquote, unwrapped otherwise.

#### `clearDataByKeyToCurrent`

`clearDataByKeyToCurrent(state: State, dataKey: String)`

This delete a data's key in current block type

#### `heading`

`heading(state: State, options: Object)`

Transform block to heading, if it is already wrapped unwrap it.

#### `insertBlock`

`insertBlock(state: State, options: Object)`

Insert a new block with settings in options.

#### `list`

`list(state: State, options: Object)`

This plugin is based on https://github.com/GitbookIO/slate-edit-list/, will wrap to list, if it's wrapped unwrap it.

#### `setBlock`

`setBlock(state: State, options: Object)`

update block with new option settings.

### History

#### `undo`

`undo(state: State)`

do undo once.

### Inlines

#### `insetInline`

`insertInline(state: State, options: Object)`

insert a new inline with option settings.

#### `links`

`links(state: State, type: String, options: Object)`

insert a link with `options.href` settings, wrapped inline if the selection is expanded, and unwrap if it is a link.

### Marks

#### `addMarkOverwrite`

`addMarkOverwrite(state: State, options: Object)`

if the selection is equal to `options.type` it will remove the original one and add a new mark with the option settings.


#### `removeMarkAll`

`removeMarkAll(state: State)`

remove all marks in the selection.

#### `removeMarkTypeAll`

`removeMarkTypeAll(state: State, type: String)`

remove mark in the selection with the same mark type.

#### `toggleMark`

`toggleMark(state: State, options: Object)`

toggle mark with option settings.


## Utilities

### get

#### `getMarkType`

`getMarkType(state: State, type: String)`

get all marks of a type in a selection.

#### `getBlockType`

`getBlockType(state: State, type: String)`

get all blocks of a type in a selection.

### have

#### `haveMarks`

`haveMarks(state: State, type: String) => Boolean`

have mark of a type in the selection.

#### `haveBlocks`

`haveBlocks(state: State, type: String) => Boolean`

have block of a type in the selection.


#### `haveInlines`

`haveInlines(state: State, type: String) => Boolean`

have inline of a type in the selection.

#### `haveDataKeyInSomeBlocks`

`haveDataKeyInSomeBlocks(state: State, dataKey: String) => Boolean`

have data key in some blocks in the selection

#### `haveDataKeyInSomeMarks`

`haveDataKeyInSomeMarks(state: State, dataKey: String) => Boolean`

have data key in some marks in the selection.


### is

#### `isList`

`isList(state: State, type: String, options: Object) => Boolean`

#### `isBlockquote`

`isBlockquote(state: State, options: Object) => Boolean`


#### `isTable`

`isTable(state: State, options: Object) => Boolean`

### what

#### `whatMarkTypes`

`whatMarkTypes(state: State)`

what are the mark types in a selection.

#### `whatBlockTypes`

`whatBlockTypes(state: State)`

what are the block types in a selection.

#### `whatInlineTypes`

`whatInlineTypes(state: State)`

what are the inline types in a selection


## Start example server

```
node devServer.js
```

## Maintainer

[chilijung](https://github.com/chilijung)

## License

MIT © [Canner](https://github.com/canner)


[npm-image]: https://badge.fury.io/js/slate-plugins.svg
[npm-url]: https://npmjs.org/package/slate-plugins
[travis-image]: https://travis-ci.org/Canner/slate-plugins.svg?branch=master
[travis-url]: https://travis-ci.org/Canner/slate-plugins
[daviddm-image]: https://david-dm.org/Canner/slate-plugins.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/Canner/slate-plugins
