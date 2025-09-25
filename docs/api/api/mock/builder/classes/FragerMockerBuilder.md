[**frager v1.0.0**](../../../../README.md)

***

[frager](../../../../modules.md) / [api/mock/builder](../README.md) / FragerMockerBuilder

# Class: FragerMockerBuilder

Defined in: [api/mock/builder.ts:4](https://github.com/kkatou7209/frager/blob/491d0c84b17cb650ad82291d75ba89f1fb98e121/lib/api/mock/builder.ts#L4)

## Constructors

### Constructor

> **new FragerMockerBuilder**(): `FragerMockerBuilder`

#### Returns

`FragerMockerBuilder`

## Methods

### base()

> **base**(`url`): `FragerMockerBuilder`

Defined in: [api/mock/builder.ts:17](https://github.com/kkatou7209/frager/blob/491d0c84b17cb650ad82291d75ba89f1fb98e121/lib/api/mock/builder.ts#L17)

Set base URL of all requests.

#### Parameters

##### url

`string`

Base URL.

#### Returns

`FragerMockerBuilder`

***

### build()

> **build**(): [`FragerMocker`](../../mocker/classes/FragerMocker.md)

Defined in: [api/mock/builder.ts:142](https://github.com/kkatou7209/frager/blob/491d0c84b17cb650ad82291d75ba89f1fb98e121/lib/api/mock/builder.ts#L142)

Create mocker instance.

#### Returns

[`FragerMocker`](../../mocker/classes/FragerMocker.md)

***

### onConnect()

> **onConnect**(`path`, `callback`): `FragerMockerBuilder`

Defined in: [api/mock/builder.ts:118](https://github.com/kkatou7209/frager/blob/491d0c84b17cb650ad82291d75ba89f1fb98e121/lib/api/mock/builder.ts#L118)

Set mocker for CONNECT request

#### Parameters

##### path

`string`

##### callback

[`MockerCallback`](../../mocker/type-aliases/MockerCallback.md)

#### Returns

`FragerMockerBuilder`

***

### onDelete()

> **onDelete**(`path`, `callback`): `FragerMockerBuilder`

Defined in: [api/mock/builder.ts:79](https://github.com/kkatou7209/frager/blob/491d0c84b17cb650ad82291d75ba89f1fb98e121/lib/api/mock/builder.ts#L79)

Set mocker for DELETE request

#### Parameters

##### path

`string`

##### callback

[`MockerCallback`](../../mocker/type-aliases/MockerCallback.md)

#### Returns

`FragerMockerBuilder`

***

### onGet()

> **onGet**(`path`, `callback`): `FragerMockerBuilder`

Defined in: [api/mock/builder.ts:27](https://github.com/kkatou7209/frager/blob/491d0c84b17cb650ad82291d75ba89f1fb98e121/lib/api/mock/builder.ts#L27)

Set mocker for GET request.

#### Parameters

##### path

`string`

##### callback

[`MockerCallback`](../../mocker/type-aliases/MockerCallback.md)

#### Returns

`FragerMockerBuilder`

***

### onHead()

> **onHead**(`path`, `callback`): `FragerMockerBuilder`

Defined in: [api/mock/builder.ts:92](https://github.com/kkatou7209/frager/blob/491d0c84b17cb650ad82291d75ba89f1fb98e121/lib/api/mock/builder.ts#L92)

Set mocker for HEAD request

#### Parameters

##### path

`string`

##### callback

[`MockerCallback`](../../mocker/type-aliases/MockerCallback.md)

#### Returns

`FragerMockerBuilder`

***

### onOptions()

> **onOptions**(`path`, `callback`): `FragerMockerBuilder`

Defined in: [api/mock/builder.ts:131](https://github.com/kkatou7209/frager/blob/491d0c84b17cb650ad82291d75ba89f1fb98e121/lib/api/mock/builder.ts#L131)

Set mocker for OPTIONS request

#### Parameters

##### path

`string`

##### callback

[`MockerCallback`](../../mocker/type-aliases/MockerCallback.md)

#### Returns

`FragerMockerBuilder`

***

### onPatch()

> **onPatch**(`path`, `callback`): `FragerMockerBuilder`

Defined in: [api/mock/builder.ts:66](https://github.com/kkatou7209/frager/blob/491d0c84b17cb650ad82291d75ba89f1fb98e121/lib/api/mock/builder.ts#L66)

Set mocker for PATCH request

#### Parameters

##### path

`string`

##### callback

[`MockerCallback`](../../mocker/type-aliases/MockerCallback.md)

#### Returns

`FragerMockerBuilder`

***

### onPost()

> **onPost**(`path`, `callback`): `FragerMockerBuilder`

Defined in: [api/mock/builder.ts:40](https://github.com/kkatou7209/frager/blob/491d0c84b17cb650ad82291d75ba89f1fb98e121/lib/api/mock/builder.ts#L40)

Set mocker for POST request

#### Parameters

##### path

`string`

##### callback

[`MockerCallback`](../../mocker/type-aliases/MockerCallback.md)

#### Returns

`FragerMockerBuilder`

***

### onPut()

> **onPut**(`path`, `callback`): `FragerMockerBuilder`

Defined in: [api/mock/builder.ts:53](https://github.com/kkatou7209/frager/blob/491d0c84b17cb650ad82291d75ba89f1fb98e121/lib/api/mock/builder.ts#L53)

Set mocker for PUT request

#### Parameters

##### path

`string`

##### callback

[`MockerCallback`](../../mocker/type-aliases/MockerCallback.md)

#### Returns

`FragerMockerBuilder`

***

### onTrace()

> **onTrace**(`path`, `callback`): `FragerMockerBuilder`

Defined in: [api/mock/builder.ts:105](https://github.com/kkatou7209/frager/blob/491d0c84b17cb650ad82291d75ba89f1fb98e121/lib/api/mock/builder.ts#L105)

Set mocker for TRACE request

#### Parameters

##### path

`string`

##### callback

[`MockerCallback`](../../mocker/type-aliases/MockerCallback.md)

#### Returns

`FragerMockerBuilder`
