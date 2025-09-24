[**frager v0.2.0**](../../README.md)

***

[frager](../../modules.md) / [frager](../README.md) / Frager

# Class: Frager

Defined in: [frager.ts:9](https://github.com/kkatou7209/frager/blob/3c5e32e0935b97da6bcb5b67d12b4a50f45b0e7e/lib/api/frager.ts#L9)

HTTP client class in Frager.

## Constructors

### Constructor

> **new Frager**(`config`): `Frager`

Defined in: [frager.ts:15](https://github.com/kkatou7209/frager/blob/3c5e32e0935b97da6bcb5b67d12b4a50f45b0e7e/lib/api/frager.ts#L15)

#### Parameters

##### config

`FragerConfig`

#### Returns

`Frager`

## Methods

### after()

> **after**(`callback`): `Frager`

Defined in: [frager.ts:123](https://github.com/kkatou7209/frager/blob/3c5e32e0935b97da6bcb5b67d12b4a50f45b0e7e/lib/api/frager.ts#L123)

Create new instance with setting new call back function to execute 
after request.

#### Parameters

##### callback

`FragerAfterCallback`

Call back function to execute after request.

#### Returns

`Frager`

***

### base()

> **base**(`url`): `Frager`

Defined in: [frager.ts:46](https://github.com/kkatou7209/frager/blob/3c5e32e0935b97da6bcb5b67d12b4a50f45b0e7e/lib/api/frager.ts#L46)

Create new instance with new base URL.

#### Parameters

##### url

`string`

New base URL.

#### Returns

`Frager`

***

### before()

> **before**(`callback`): `Frager`

Defined in: [frager.ts:114](https://github.com/kkatou7209/frager/blob/3c5e32e0935b97da6bcb5b67d12b4a50f45b0e7e/lib/api/frager.ts#L114)

Create new instance with setting new call back function to execute 
before request.

#### Parameters

##### callback

`FragerBeforeCallback`

Call back function to execute before request.

#### Returns

`Frager`

***

### cache()

> **cache**(`mode`): `Frager`

Defined in: [frager.ts:77](https://github.com/kkatou7209/frager/blob/3c5e32e0935b97da6bcb5b67d12b4a50f45b0e7e/lib/api/frager.ts#L77)

Create new instance with enabling or disabling mock.

#### Parameters

##### mode

`RequestCache`

Cache mode.

#### Returns

`Frager`

***

### client()

> **client**(): [`FragerRequester`](../../requester/classes/FragerRequester.md)

Defined in: [frager.ts:32](https://github.com/kkatou7209/frager/blob/3c5e32e0935b97da6bcb5b67d12b4a50f45b0e7e/lib/api/frager.ts#L32)

Get HTTP client.

#### Returns

[`FragerRequester`](../../requester/classes/FragerRequester.md)

***

### clone()

> **clone**(): `Frager`

Defined in: [frager.ts:37](https://github.com/kkatou7209/frager/blob/3c5e32e0935b97da6bcb5b67d12b4a50f45b0e7e/lib/api/frager.ts#L37)

Create cloned instance.

#### Returns

`Frager`

***

### credentials()

> **credentials**(`mode`): `Frager`

Defined in: [frager.ts:69](https://github.com/kkatou7209/frager/blob/3c5e32e0935b97da6bcb5b67d12b4a50f45b0e7e/lib/api/frager.ts#L69)

Create new instance with setting credentials mode.

#### Parameters

##### mode

`RequestCredentials`

Credentials mode.

#### Returns

`Frager`

***

### disableMock()

> **disableMock**(): `Frager`

Defined in: [frager.ts:91](https://github.com/kkatou7209/frager/blob/3c5e32e0935b97da6bcb5b67d12b4a50f45b0e7e/lib/api/frager.ts#L91)

Create new instance with disabling mock.

#### Returns

`Frager`

***

### enableMock()

> **enableMock**(): `Frager`

Defined in: [frager.ts:84](https://github.com/kkatou7209/frager/blob/3c5e32e0935b97da6bcb5b67d12b4a50f45b0e7e/lib/api/frager.ts#L84)

Create new instance with enabling mock.

#### Returns

`Frager`

***

### header()

> **header**(`name`, `value`): `Frager`

Defined in: [frager.ts:55](https://github.com/kkatou7209/frager/blob/3c5e32e0935b97da6bcb5b67d12b4a50f45b0e7e/lib/api/frager.ts#L55)

Create new instance with replacing or setting new header.

#### Parameters

##### name

`string`

Header name.

##### value

`string`

Header value.

#### Returns

`Frager`

***

### headers()

> **headers**(`headers`): `Frager`

Defined in: [frager.ts:99](https://github.com/kkatou7209/frager/blob/3c5e32e0935b97da6bcb5b67d12b4a50f45b0e7e/lib/api/frager.ts#L99)

Create new instance with replacing and setting new headers.

#### Parameters

##### headers

`Record`\<`string`, `string`\>

Headers to set or replace.

#### Returns

`Frager`

***

### create()

> `static` **create**(): [`FragerBuilder`](../../builder/classes/FragerBuilder.md)

Defined in: [frager.ts:22](https://github.com/kkatou7209/frager/blob/3c5e32e0935b97da6bcb5b67d12b4a50f45b0e7e/lib/api/frager.ts#L22)

Get Farger builder.

#### Returns

[`FragerBuilder`](../../builder/classes/FragerBuilder.md)

***

### mocker()

> `static` **mocker**(): [`FragerMockerBuilder`](../../mock/builder/classes/FragerMockerBuilder.md)

Defined in: [frager.ts:27](https://github.com/kkatou7209/frager/blob/3c5e32e0935b97da6bcb5b67d12b4a50f45b0e7e/lib/api/frager.ts#L27)

Get FragerMocker builder.

#### Returns

[`FragerMockerBuilder`](../../mock/builder/classes/FragerMockerBuilder.md)
