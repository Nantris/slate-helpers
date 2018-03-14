# slate-helpers
> A set of helper and utility functions for Slate editors.

## Usage

This repository is maintain in a monorepo see packages in `packages` folder.

## Helper packages

### Blocks

#### `@canner/slate-helper-block-adddata`

`fn(change: Change, data: Object) => Change`

Add additional data to block, this could be useful in implement things like align.

#### `@canner/slate-helper-block-quote`

`fn(change: Change, options: Object) => Change`

This plugin is based on https://github.com/GitbookIO/slate-edit-blockquote, will wrapped block quote if the selection is not within a blockquote, otherwise unwrapped it.

#### `@canner/slate-helper-block-cleardatabykey`

`fn(change: Change, dataKey: String) => Change`

This remove a data key that stores in current block type

#### `@canner/slate-helper-block-heading`

`fn(change: Change, options: Object) => Change`

Transform normal block to heading block, if it is already wrapped unwrap it.

#### `@canner/slate-helper-block-list`

`fn(change: Change, options: Object) => Change`

This plugin is based on https://github.com/GitbookIO/slate-edit-list/, will wrap to block list, if it's wrapped unwrap it.

### Inlines

#### `@canner/slate-helper-inline-links`

`fn(change: Change, type: String, options: Object) => Change`

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


## Development

```
# Get started
$ lerna bootstrap

# run tests
$ lerna run test
```

## Maintainer

[chilijung](https://github.com/chilijung)

## License

MIT © [Canner](https://github.com/canner)

