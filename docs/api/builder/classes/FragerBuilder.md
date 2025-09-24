[**frager v0.2.0**](../../README.md)

***

[frager](../../modules.md) / [builder](../README.md) / FragerBuilder

# Class: FragerBuilder

Defined in: [builder.ts:9](https://github.com/kkatou7209/frager/blob/3c5e32e0935b97da6bcb5b67d12b4a50f45b0e7e/lib/api/builder.ts#L9)

Builder of Frager.

## Constructors

### Constructor

> **new FragerBuilder**(): `FragerBuilder`

#### Returns

`FragerBuilder`

## Methods

### after()

> **after**(`callback`): `FragerBuilder`

Defined in: [builder.ts:78](https://github.com/kkatou7209/frager/blob/3c5e32e0935b97da6bcb5b67d12b4a50f45b0e7e/lib/api/builder.ts#L78)

Register callback after each request.

#### Parameters

##### callback

`FragerAfterCallback`

#### Returns

`FragerBuilder`

***

### base()

> **base**(`url`): `FragerBuilder`

Defined in: [builder.ts:16](https://github.com/kkatou7209/frager/blob/3c5e32e0935b97da6bcb5b67d12b4a50f45b0e7e/lib/api/builder.ts#L16)

Set base URL of all requests.

#### Parameters

##### url

`string`

#### Returns

`FragerBuilder`

***

### before()

> **before**(`callback`): `FragerBuilder`

Defined in: [builder.ts:70](https://github.com/kkatou7209/frager/blob/3c5e32e0935b97da6bcb5b67d12b4a50f45b0e7e/lib/api/builder.ts#L70)

Register callback before each request.

#### Parameters

##### callback

`FragerBeforeCallback`

#### Returns

`FragerBuilder`

***

### build()

> **build**(): [`Frager`](../../frager/classes/Frager.md)

Defined in: [builder.ts:86](https://github.com/kkatou7209/frager/blob/3c5e32e0935b97da6bcb5b67d12b4a50f45b0e7e/lib/api/builder.ts#L86)

Create new Frager instance with configured settings.

#### Returns

[`Frager`](../../frager/classes/Frager.md)

***

### cache()

> **cache**(`mode`): `FragerBuilder`

Defined in: [builder.ts:54](https://github.com/kkatou7209/frager/blob/3c5e32e0935b97da6bcb5b67d12b4a50f45b0e7e/lib/api/builder.ts#L54)

Set cache mode.

#### Parameters

##### mode

`RequestCache`

#### Returns

`FragerBuilder`

***

### credentials()

> **credentials**(`mode`): `FragerBuilder`

Defined in: [builder.ts:46](https://github.com/kkatou7209/frager/blob/3c5e32e0935b97da6bcb5b67d12b4a50f45b0e7e/lib/api/builder.ts#L46)

Set credentials mode.

#### Parameters

##### mode

`RequestCredentials`

#### Returns

`FragerBuilder`

***

### enableMock()

> **enableMock**(): `FragerBuilder`

Defined in: [builder.ts:62](https://github.com/kkatou7209/frager/blob/3c5e32e0935b97da6bcb5b67d12b4a50f45b0e7e/lib/api/builder.ts#L62)

Enable mocking.

#### Returns

`FragerBuilder`

***

### header()

> **header**(`name`, `value`): `FragerBuilder`

Defined in: [builder.ts:24](https://github.com/kkatou7209/frager/blob/3c5e32e0935b97da6bcb5b67d12b4a50f45b0e7e/lib/api/builder.ts#L24)

Set new header.

#### Parameters

##### name

`string`

##### value

`string`

#### Returns

`FragerBuilder`

***

### headers()

> **headers**(`headers`): `FragerBuilder`

Defined in: [builder.ts:35](https://github.com/kkatou7209/frager/blob/3c5e32e0935b97da6bcb5b67d12b4a50f45b0e7e/lib/api/builder.ts#L35)

Set new headers.

#### Parameters

##### headers

`Record`\<`string`, `string`\>

#### Returns

`FragerBuilder`

***

### mocker()

> **mocker**(`mocker`): `FragerBuilder`

Defined in: [builder.ts:91](https://github.com/kkatou7209/frager/blob/3c5e32e0935b97da6bcb5b67d12b4a50f45b0e7e/lib/api/builder.ts#L91)

Set mocker instance.

#### Parameters

##### mocker

[`FragerMocker`](../../mock/mocker/classes/FragerMocker.md)

#### Returns

`FragerBuilder`
