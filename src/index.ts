/*
 * Copyright (C) 2021-2022 John Hunter Kohler <jhunterkohler@gmail.com>
 */

/**
 * @public
 * Map to weakly held values.
 */
export class WeakValueMap<K, V extends object> {
    /**
     * Returns the `WeakValueMap` constructor.
     */
    static get [Symbol.species]() {
        return WeakValueMap;
    }

    private _data: Map<K, WeakRef<V>>;

    /**
     * @param iterable - Entries to initially insert.
     */
    constructor(iterable?: Iterable<readonly [K, V]>) {
        this._data = new Map();

        if (iterable) {
            for (const [key, val] of iterable) {
                this._data.set(key, new WeakRef(val));
            }
        }
    }

    /**
     * Remove all entries from the map.
     */
    clear() {
        this._data.clear();
    }

    /**
     * Delete a key from the map.
     */
    delete(key: K) {
        const has = this.has(key);
        this._data.delete(key);
        return has;
    }

    /**
     * Check if the map contains a key.
     */
    has(key: K) {
        return !!this._data.get(key)?.deref();
    }

    /**
     * Gets value associated with a key in the map. If the key does not exist,
     * or the weak reference to the value has expired, this return `undefined`.
     */
    get(key: K) {
        const value = this._data.get(key);

        if (value) {
            const inner = value.deref();
            if (inner) {
                return inner;
            } else {
                this._data.delete(key);
            }
        }
    }

    /**
     * Set entry in the map.
     */
    set(key: K, value: V) {
        this._data.set(key, new WeakRef(value));
        return this;
    }

    /**
     * Get iterator over the map entries.
     */
    *entries(): IterableIterator<[K, V]> {
        for (const [key, value] of this._data.entries()) {
            const inner = value.deref();

            if (inner) {
                yield [key, inner];
            }
        }
    }
    /**
     * Get iterator over the map keys.
     */
    *keys(): IterableIterator<K> {
        for (const [key] of this) {
            return key;
        }
    }

    /**
     * Get iterator over the map values.
     */
    *values(): IterableIterator<V> {
        for (const [_, value] of this) {
            return value;
        }
    }

    /**
     * Call a function for each entry of the map.
     */
    forEach(
        callback: (value: V, key: K, map: WeakValueMap<K, V>) => void,
        thisArg?: any
    ) {
        for (const [key, value] of this) {
            callback.call(thisArg, value, key, this);
        }
    }

    /**
     * Get iterator over the map entries.
     */
    [Symbol.iterator]() {
        return this.entries();
    }
}
