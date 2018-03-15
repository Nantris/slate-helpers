# slate-helpers [![Greenkeeper badge](https://badges.greenkeeper.io/Canner/slate-plugins.svg)](https://greenkeeper.io/)
> A set of helper and utility functions for Slate editors.

## Usage

This repository is maintain in a monorepo see packages in `packages` folder.

# Helper packages

## Blocks

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

## Inlines

#### `@canner/slate-helper-inline-links`

`fn(change: Change, type: String, options: Object) => Change`

insert a link with `options.href` settings, wrapped inline if the selection is expanded, and unwrap if it is a link.

## Marks

#### `@canner/slate-helper-mark-addoverwrite`

`fn(change: Change, options: Object) => Change`

If the selected marks have type that is equal to `options.type`, will be removeed the original one and add a new mark with the option settings.

#### `@canner/slate-helper-mark-removeall`

`fn(change: Change) => Change`

Remove all marks in the selection.

#### `@canner/slate-helper-mark-removetype`

`fn(change: Change, type: String) => Change`

Remove specific mark type in the selection.

----

# Utilities packages

## `@canner/slate-util-get`

Supported methods:

#### `getMarkType`

`getMarkType(change: Change, type: String) => List<Mark>`

Get marks that is a specific type in the selection.

#### `getBlockType`

`getBlockType(change: Change, type: String) => List<Block>`

Get blocks that is a specific type in the selection.

## `@canner/slate-util-have`

Supported methods:

#### `haveMarks`

`haveMarks(change: Change, type: String) => Boolean`

The selected area have a specific mark type.

#### `haveBlocks`

`haveBlocks(change: Change, type: String) => Boolean`

The selected area have a specific block type.


#### `haveInlines`

`haveInlines(change: Change, type: String) => Boolean`

The selected area have a specific inline type.

#### `haveDataKeyInSomeBlocks`

`haveDataKeyInSomeBlocks(change: Change, dataKey: String) => Boolean`

Whether there is a specific data key in some blocks.

#### `haveDataKeyInSomeMarks`

`haveDataKeyInSomeMarks(change: Change, dataKey: String) => Boolean`

Whether there is a specific data key in some marks.

## `@canner/slate-util-what`

Supported methods:

#### `whatMarkTypes`

`whatMarkTypes(change: Change) => List<string>`

What are the types that the marks have in the selection.

#### `whatBlockTypes`

`whatBlockTypes(change: Change) => List<string>`

What are the types that the blocks have in the selection.

#### `whatInlineTypes`

`whatInlineTypes(change: Change) => List<string>`

What are the types that the inline have in the selection.



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

