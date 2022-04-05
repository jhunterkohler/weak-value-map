[main-docs]: https://hunterkohler.github.io/weak-value-map/ "Main documentation"

# WeakValueMap

Store weakly held references to values in a map with automatic dereferencing.
This improves a simple object or map to `WeakRef` by handling access and
existance checks. The api is consistent with the standard `Map` api. Note
that the standard `WeakMap` holds weak keys, not weak values.

The only difference from the standard `Map` api is a method
`WeakValueMap.prototype.clean` which searches all entries in the map, deleting
those who's values have been destroyed.

## Install

Install from npm:

`npm install weak-value-map`

## Documentation

See the documentation [here][main-docs].

## Typescript

The project has native type support.
