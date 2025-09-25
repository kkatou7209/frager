[**frager v1.0.0**](../../../../README.md)

***

[frager](../../../../modules.md) / [api/mock/mocker](../README.md) / FragerMocker

# Class: FragerMocker

Defined in: [api/mock/mocker.ts:12](https://github.com/kkatou7209/frager/blob/491d0c84b17cb650ad82291d75ba89f1fb98e121/lib/api/mock/mocker.ts#L12)

## Constructors

### Constructor

> **new FragerMocker**(`base`, `routes`): `FragerMocker`

Defined in: [api/mock/mocker.ts:18](https://github.com/kkatou7209/frager/blob/491d0c84b17cb650ad82291d75ba89f1fb98e121/lib/api/mock/mocker.ts#L18)

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

Defined in: [api/mock/mocker.ts:30](https://github.com/kkatou7209/frager/blob/491d0c84b17cb650ad82291d75ba89f1fb98e121/lib/api/mock/mocker.ts#L30)

#### Parameters

##### request

`Request`

#### Returns

`Promise`\<`Response`\>

***

### hasRoute()

> **hasRoute**(`method`, `url`): `boolean`

Defined in: [api/mock/mocker.ts:23](https://github.com/kkatou7209/frager/blob/491d0c84b17cb650ad82291d75ba89f1fb98e121/lib/api/mock/mocker.ts#L23)

#### Parameters

##### method

`"GET"` | `"POST"` | `"PUT"` | `"DELETE"` | `"PATCH"` | `"HEAD"` | `"TRACE"` | `"OPTIONS"` | `"CONNECT"`

##### url

`string`

#### Returns

`boolean`
