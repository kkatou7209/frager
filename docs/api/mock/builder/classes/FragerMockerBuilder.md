[**frager v0.2.0**](../../../README.md)

***

[frager](../../../modules.md) / [mock/builder](../README.md) / FragerMockerBuilder

# Class: FragerMockerBuilder

Defined in: mock/builder.ts:4

## Constructors

### Constructor

> **new FragerMockerBuilder**(): `FragerMockerBuilder`

#### Returns

`FragerMockerBuilder`

## Methods

### base()

> **base**(`url`): `FragerMockerBuilder`

Defined in: mock/builder.ts:16

Set base URL of all requests.

#### Parameters

##### url

`string`

#### Returns

`FragerMockerBuilder`

***

### build()

> **build**(): [`FragerMocker`](../../mocker/classes/FragerMocker.md)

Defined in: mock/builder.ts:112

Create mocker instance.

#### Returns

[`FragerMocker`](../../mocker/classes/FragerMocker.md)

***

### onConnect()

> **onConnect**(`path`, `callback`): `FragerMockerBuilder`

Defined in: mock/builder.ts:90

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

Defined in: mock/builder.ts:57

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

Defined in: mock/builder.ts:24

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

Defined in: mock/builder.ts:68

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

Defined in: mock/builder.ts:101

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

Defined in: mock/builder.ts:35

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

Defined in: mock/builder.ts:46

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

Defined in: mock/builder.ts:79

Set mocker for TRACE request

#### Parameters

##### path

`string`

##### callback

[`MockerCallback`](../../mocker/type-aliases/MockerCallback.md)

#### Returns

`FragerMockerBuilder`
