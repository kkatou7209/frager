[**frager v0.2.0**](../../../README.md)

***

[frager](../../../modules.md) / [mock/mocker](../README.md) / FragerMocker

# Class: FragerMocker

Defined in: [mock/mocker.ts:12](https://github.com/kkatou7209/frager/blob/3e44a5ea879bc197bd00a63031eb884a5a2133a6/lib/api/mock/mocker.ts#L12)

## Constructors

### Constructor

> **new FragerMocker**(`base`, `routes`): `FragerMocker`

Defined in: [mock/mocker.ts:18](https://github.com/kkatou7209/frager/blob/3e44a5ea879bc197bd00a63031eb884a5a2133a6/lib/api/mock/mocker.ts#L18)

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

Defined in: [mock/mocker.ts:30](https://github.com/kkatou7209/frager/blob/3e44a5ea879bc197bd00a63031eb884a5a2133a6/lib/api/mock/mocker.ts#L30)

#### Parameters

##### request

`Request`

#### Returns

`Promise`\<`Response`\>

***

### hasRoute()

> **hasRoute**(`method`, `url`): `boolean`

Defined in: [mock/mocker.ts:23](https://github.com/kkatou7209/frager/blob/3e44a5ea879bc197bd00a63031eb884a5a2133a6/lib/api/mock/mocker.ts#L23)

#### Parameters

##### method

`"GET"` | `"POST"` | `"PUT"` | `"DELETE"` | `"PATCH"` | `"HEAD"` | `"TRACE"` | `"OPTIONS"` | `"CONNECT"`

##### url

`string`

#### Returns

`boolean`
