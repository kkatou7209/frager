[**frager v0.2.0**](../../../README.md)

***

[frager](../../../modules.md) / [api/builder](../README.md) / FragerBuilder

# Class: FragerBuilder

Defined in: [api/builder.ts:9](https://github.com/kkatou7209/frager/blob/25da44507e44e35eaf72e7a7917a8e5de25272a7/lib/api/builder.ts#L9)

Builder of Frager.

## Constructors

### Constructor

> **new FragerBuilder**(): `FragerBuilder`

#### Returns

`FragerBuilder`

## Methods

### after()

> **after**(`callback`): `FragerBuilder`

Defined in: [api/builder.ts:132](https://github.com/kkatou7209/frager/blob/25da44507e44e35eaf72e7a7917a8e5de25272a7/lib/api/builder.ts#L132)

Register callback after each request.

#### Parameters

##### callback

[`FragerAfterCallback`](../../../config/config/type-aliases/FragerAfterCallback.md)

#### Returns

`FragerBuilder`

***

### base()

> **base**(`url`): `FragerBuilder`

Defined in: [api/builder.ts:16](https://github.com/kkatou7209/frager/blob/25da44507e44e35eaf72e7a7917a8e5de25272a7/lib/api/builder.ts#L16)

Set base URL of all requests.

#### Parameters

##### url

`string`

#### Returns

`FragerBuilder`

***

### before()

> **before**(`callback`): `FragerBuilder`

Defined in: [api/builder.ts:124](https://github.com/kkatou7209/frager/blob/25da44507e44e35eaf72e7a7917a8e5de25272a7/lib/api/builder.ts#L124)

Register callback before each request.

#### Parameters

##### callback

[`FragerBeforeCallback`](../../../config/config/type-aliases/FragerBeforeCallback.md)

#### Returns

`FragerBuilder`

***

### build()

> **build**(): [`Frager`](../../frager/classes/Frager.md)

Defined in: [api/builder.ts:140](https://github.com/kkatou7209/frager/blob/25da44507e44e35eaf72e7a7917a8e5de25272a7/lib/api/builder.ts#L140)

Create new Frager instance with configured settings.

#### Returns

[`Frager`](../../frager/classes/Frager.md)

***

### cache()

> **cache**(`mode`): `FragerBuilder`

Defined in: [api/builder.ts:63](https://github.com/kkatou7209/frager/blob/25da44507e44e35eaf72e7a7917a8e5de25272a7/lib/api/builder.ts#L63)

Set cache mode.

#### Parameters

##### mode

`RequestCache`

#### Returns

`FragerBuilder`

***

### credentials()

> **credentials**(`mode`): `FragerBuilder`

Defined in: [api/builder.ts:55](https://github.com/kkatou7209/frager/blob/25da44507e44e35eaf72e7a7917a8e5de25272a7/lib/api/builder.ts#L55)

Set credentials mode.

#### Parameters

##### mode

`RequestCredentials`

#### Returns

`FragerBuilder`

***

### enableMock()

> **enableMock**(): `FragerBuilder`

Defined in: [api/builder.ts:116](https://github.com/kkatou7209/frager/blob/25da44507e44e35eaf72e7a7917a8e5de25272a7/lib/api/builder.ts#L116)

Enable mocking.

#### Returns

`FragerBuilder`

***

### header()

> **header**(`name`, `value`): `FragerBuilder`

Defined in: [api/builder.ts:24](https://github.com/kkatou7209/frager/blob/25da44507e44e35eaf72e7a7917a8e5de25272a7/lib/api/builder.ts#L24)

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

Defined in: [api/builder.ts:35](https://github.com/kkatou7209/frager/blob/25da44507e44e35eaf72e7a7917a8e5de25272a7/lib/api/builder.ts#L35)

Set new headers.

#### Parameters

##### headers

`Record`\<`string`, `string`\>

#### Returns

`FragerBuilder`

***

### keepalive()

> **keepalive**(`keepalive`): `FragerBuilder`

Defined in: [api/builder.ts:108](https://github.com/kkatou7209/frager/blob/25da44507e44e35eaf72e7a7917a8e5de25272a7/lib/api/builder.ts#L108)

Set keepalive flag.

#### Parameters

##### keepalive

`boolean`

#### Returns

`FragerBuilder`

***

### mocker()

> **mocker**(`mocker`): `FragerBuilder`

Defined in: [api/builder.ts:145](https://github.com/kkatou7209/frager/blob/25da44507e44e35eaf72e7a7917a8e5de25272a7/lib/api/builder.ts#L145)

Set mocker instance.

#### Parameters

##### mocker

[`FragerMocker`](../../mock/mocker/classes/FragerMocker.md)

#### Returns

`FragerBuilder`

***

### mode()

> **mode**(`mode`): `FragerBuilder`

Defined in: [api/builder.ts:47](https://github.com/kkatou7209/frager/blob/25da44507e44e35eaf72e7a7917a8e5de25272a7/lib/api/builder.ts#L47)

Set request mode.

#### Parameters

##### mode

`RequestMode`

Request mode.

#### Returns

`FragerBuilder`

***

### priority()

> **priority**(`priority`): `FragerBuilder`

Defined in: [api/builder.ts:72](https://github.com/kkatou7209/frager/blob/25da44507e44e35eaf72e7a7917a8e5de25272a7/lib/api/builder.ts#L72)

Set request priority.

#### Parameters

##### priority

`RequestPriority`

Request priority.

#### Returns

`FragerBuilder`

***

### redirect()

> **redirect**(`redirect`): `FragerBuilder`

Defined in: [api/builder.ts:81](https://github.com/kkatou7209/frager/blob/25da44507e44e35eaf72e7a7917a8e5de25272a7/lib/api/builder.ts#L81)

Set request redirect mode.

#### Parameters

##### redirect

`RequestRedirect`

Request redirect mode.

#### Returns

`FragerBuilder`

***

### referrer()

> **referrer**(`referrer`): `FragerBuilder`

Defined in: [api/builder.ts:90](https://github.com/kkatou7209/frager/blob/25da44507e44e35eaf72e7a7917a8e5de25272a7/lib/api/builder.ts#L90)

Set request referrer.

#### Parameters

##### referrer

`string`

Request referrer.

#### Returns

`FragerBuilder`

***

### referrerPolicy()

> **referrerPolicy**(`policy`): `FragerBuilder`

Defined in: [api/builder.ts:99](https://github.com/kkatou7209/frager/blob/25da44507e44e35eaf72e7a7917a8e5de25272a7/lib/api/builder.ts#L99)

Set referrer policy.

#### Parameters

##### policy

`ReferrerPolicy`

Referrer policy.

#### Returns

`FragerBuilder`
