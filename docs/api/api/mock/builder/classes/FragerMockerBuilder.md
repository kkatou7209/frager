[**frager v0.2.0**](../../../../README.md)

***

[frager](../../../../modules.md) / [api/mock/builder](../README.md) / FragerMockerBuilder

# Class: FragerMockerBuilder

Defined in: [api/mock/builder.ts:4](https://github.com/kkatou7209/frager/blob/25da44507e44e35eaf72e7a7917a8e5de25272a7/lib/api/mock/builder.ts#L4)

## Constructors

### Constructor

> **new FragerMockerBuilder**(): `FragerMockerBuilder`

#### Returns

`FragerMockerBuilder`

## Methods

### base()

> **base**(`url`): `FragerMockerBuilder`

Defined in: [api/mock/builder.ts:16](https://github.com/kkatou7209/frager/blob/25da44507e44e35eaf72e7a7917a8e5de25272a7/lib/api/mock/builder.ts#L16)

Set base URL of all requests.

#### Parameters

##### url

`string`

#### Returns

`FragerMockerBuilder`

***

### build()

> **build**(): [`FragerMocker`](../../mocker/classes/FragerMocker.md)

Defined in: [api/mock/builder.ts:112](https://github.com/kkatou7209/frager/blob/25da44507e44e35eaf72e7a7917a8e5de25272a7/lib/api/mock/builder.ts#L112)

Create mocker instance.

#### Returns

[`FragerMocker`](../../mocker/classes/FragerMocker.md)

***

### onConnect()

> **onConnect**(`path`, `callback`): `FragerMockerBuilder`

Defined in: [api/mock/builder.ts:90](https://github.com/kkatou7209/frager/blob/25da44507e44e35eaf72e7a7917a8e5de25272a7/lib/api/mock/builder.ts#L90)

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

Defined in: [api/mock/builder.ts:57](https://github.com/kkatou7209/frager/blob/25da44507e44e35eaf72e7a7917a8e5de25272a7/lib/api/mock/builder.ts#L57)

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

Defined in: [api/mock/builder.ts:24](https://github.com/kkatou7209/frager/blob/25da44507e44e35eaf72e7a7917a8e5de25272a7/lib/api/mock/builder.ts#L24)

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

Defined in: [api/mock/builder.ts:68](https://github.com/kkatou7209/frager/blob/25da44507e44e35eaf72e7a7917a8e5de25272a7/lib/api/mock/builder.ts#L68)

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

Defined in: [api/mock/builder.ts:101](https://github.com/kkatou7209/frager/blob/25da44507e44e35eaf72e7a7917a8e5de25272a7/lib/api/mock/builder.ts#L101)

Set mocker for OPTIONS request

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

Defined in: [api/mock/builder.ts:35](https://github.com/kkatou7209/frager/blob/25da44507e44e35eaf72e7a7917a8e5de25272a7/lib/api/mock/builder.ts#L35)

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

Defined in: [api/mock/builder.ts:46](https://github.com/kkatou7209/frager/blob/25da44507e44e35eaf72e7a7917a8e5de25272a7/lib/api/mock/builder.ts#L46)

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

Defined in: [api/mock/builder.ts:79](https://github.com/kkatou7209/frager/blob/25da44507e44e35eaf72e7a7917a8e5de25272a7/lib/api/mock/builder.ts#L79)

Set mocker for TRACE request

#### Parameters

##### path

`string`

##### callback

[`MockerCallback`](../../mocker/type-aliases/MockerCallback.md)

#### Returns

`FragerMockerBuilder`
