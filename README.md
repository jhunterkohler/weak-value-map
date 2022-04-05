
# Class: WeakValueMap<K, V\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `K` | `K` |
| `V` | extends `object` |

## Table of contents

### Constructors

- [constructor](WeakValueMap.md#constructor)

### Properties

- [\_data](WeakValueMap.md#_data)

### Accessors

- [[species]](WeakValueMap.md#[species])

### Methods

- [[iterator]](WeakValueMap.md#[iterator])
- [clear](WeakValueMap.md#clear)
- [delete](WeakValueMap.md#delete)
- [entries](WeakValueMap.md#entries)
- [forEach](WeakValueMap.md#foreach)
- [get](WeakValueMap.md#get)
- [has](WeakValueMap.md#has)
- [keys](WeakValueMap.md#keys)
- [set](WeakValueMap.md#set)
- [values](WeakValueMap.md#values)

## Constructors

### constructor

• **new WeakValueMap**<`K`, `V`\>(`iterable?`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | `K` |
| `V` | extends `object` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `iterable?` | `Iterable`<readonly [`K`, `V`]\> | Entries to initially insert. |

#### Defined in

[index.ts:22](https://github.com/HunterKohler/weak-value-map/blob/518148d/src/index.ts#L22)

## Properties

### \_data

• `Private` **\_data**: `Map`<`K`, `WeakRef`<`V`\>\>

#### Defined in

[index.ts:17](https://github.com/HunterKohler/weak-value-map/blob/518148d/src/index.ts#L17)

## Accessors

### [species]

• `Static` `get` **[species]**(): typeof [`WeakValueMap`](WeakValueMap.md)

Returns the `WeakValueMap` constructor.

#### Returns

typeof [`WeakValueMap`](WeakValueMap.md)

#### Defined in

[index.ts:13](https://github.com/HunterKohler/weak-value-map/blob/518148d/src/index.ts#L13)

## Methods

### [iterator]

▸ **[iterator]**(): `IterableIterator`<[`K`, `V`]\>

Get iterator over the map entries.

#### Returns

`IterableIterator`<[`K`, `V`]\>

#### Defined in

[index.ts:125](https://github.com/HunterKohler/weak-value-map/blob/518148d/src/index.ts#L125)

___

### clear

▸ **clear**(): `void`

Remove all entries from the map.

#### Returns

`void`

#### Defined in

[index.ts:35](https://github.com/HunterKohler/weak-value-map/blob/518148d/src/index.ts#L35)

___

### delete

▸ **delete**(`key`): `boolean`

Delete a key from the map.

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `K` |

#### Returns

`boolean`

#### Defined in

[index.ts:42](https://github.com/HunterKohler/weak-value-map/blob/518148d/src/index.ts#L42)

___

### entries

▸ **entries**(): `IterableIterator`<[`K`, `V`]\>

Get iterator over the map entries.

#### Returns

`IterableIterator`<[`K`, `V`]\>

#### Defined in

[index.ts:83](https://github.com/HunterKohler/weak-value-map/blob/518148d/src/index.ts#L83)

___

### forEach

▸ **forEach**(`callback`, `thisArg?`): `void`

Call a function for each entry of the map.

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | (`value`: `V`, `key`: `K`, `map`: [`WeakValueMap`](WeakValueMap.md)<`K`, `V`\>) => `void` |
| `thisArg?` | `any` |

#### Returns

`void`

#### Defined in

[index.ts:113](https://github.com/HunterKohler/weak-value-map/blob/518148d/src/index.ts#L113)

___

### get

▸ **get**(`key`): `undefined` \| `V`

Gets value associated with a key in the map. If the key does not exist,
or the weak reference to the value has expired, this return `undefined`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `K` |

#### Returns

`undefined` \| `V`

#### Defined in

[index.ts:59](https://github.com/HunterKohler/weak-value-map/blob/518148d/src/index.ts#L59)

___

### has

▸ **has**(`key`): `boolean`

Check if the map contains a key.

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `K` |

#### Returns

`boolean`

#### Defined in

[index.ts:51](https://github.com/HunterKohler/weak-value-map/blob/518148d/src/index.ts#L51)

___

### keys

▸ **keys**(): `IterableIterator`<`K`\>

Get iterator over the map keys.

#### Returns

`IterableIterator`<`K`\>

#### Defined in

[index.ts:95](https://github.com/HunterKohler/weak-value-map/blob/518148d/src/index.ts#L95)

___

### set

▸ **set**(`key`, `value`): [`WeakValueMap`](WeakValueMap.md)<`K`, `V`\>

Set entry in the map.

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `K` |
| `value` | `V` |

#### Returns

[`WeakValueMap`](WeakValueMap.md)<`K`, `V`\>

#### Defined in

[index.ts:75](https://github.com/HunterKohler/weak-value-map/blob/518148d/src/index.ts#L75)

___

### values

▸ **values**(): `IterableIterator`<`V`\>

Get iterator over the map values.

#### Returns

`IterableIterator`<`V`\>

#### Defined in

[index.ts:104](https://github.com/HunterKohler/weak-value-map/blob/518148d/src/index.ts#L104)
