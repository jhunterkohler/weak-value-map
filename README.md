[mdn-map]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map "Map documentation"
[mdn-weakref]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakRef "WeakRef documentation"
[mdn-weakmap]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakMap "WeakMap documentation"
[main-docs]: https://hunterkohler.github.io/weak-value-map/ "Main documentation"

# WeakValueMap

Store weakly held references to values in a map with automatic dereferencing.
This improves a simple object or map to [`WeakRef`][mdn-weakref] by handling
access checks on `get()` and `has()`. The api is consistent with the standard
[`Map`][mdn-map] api. Note that the standard [`WeakMap`][mdn-weakref] holds
weak keys, not weak values.

The only difference from the standard [`Map`][mdn-map] api is a method
`WeakValueMap.prototype.clean` which searches all entries in the map, deleting
those who's values have been destroyed.

## Install

Install from npm:

`npm install weak-value-map`

## Documentation

See the main class documentation [here][main-docs].

## Typescript

The project has native type support.
