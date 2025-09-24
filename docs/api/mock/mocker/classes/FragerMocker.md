[**frager v0.2.0**](../../../README.md)

***

[frager](../../../modules.md) / [mock/mocker](../README.md) / FragerMocker

# Class: FragerMocker

Defined in: mock/mocker.ts:12

## Constructors

### Constructor

> **new FragerMocker**(`base`, `routes`): `FragerMocker`

Defined in: mock/mocker.ts:18

#### Parameters

##### base

`string`

##### routes

[`MockerRoute`](../type-aliases/MockerRoute.md)[]

#### Returns

`FragerMocker`

## Methods

### handle()

> **handle**(`request`): `Promise`\<`Response`\>

Defined in: mock/mocker.ts:30

#### Parameters

##### request

`Request`

#### Returns

`Promise`\<`Response`\>

***

### hasRoute()

> **hasRoute**(`method`, `url`): `boolean`

Defined in: mock/mocker.ts:23

#### Parameters

##### method

`"GET"` | `"POST"` | `"PUT"` | `"DELETE"` | `"HEAD"` | `"TRACE"` | `"OPTIONS"` | `"CONNECT"`

##### url

`string`

#### Returns

`boolean`
