[**frager v0.2.0**](../../../README.md)

***

[frager](../../../modules.md) / [api/frager](../README.md) / Frager

# Class: Frager

Defined in: [api/frager.ts:10](https://github.com/kkatou7209/frager/blob/25da44507e44e35eaf72e7a7917a8e5de25272a7/lib/api/frager.ts#L10)

HTTP client class in Frager.

## Constructors

### Constructor

> **new Frager**(`config`): `Frager`

Defined in: [api/frager.ts:16](https://github.com/kkatou7209/frager/blob/25da44507e44e35eaf72e7a7917a8e5de25272a7/lib/api/frager.ts#L16)

#### Parameters

##### config

[`FragerConfig`](../../../config/config/type-aliases/FragerConfig.md)

#### Returns

`Frager`

## Methods

### after()

> **after**(`callback`): `Frager`

Defined in: [api/frager.ts:171](https://github.com/kkatou7209/frager/blob/25da44507e44e35eaf72e7a7917a8e5de25272a7/lib/api/frager.ts#L171)

Create new instance with setting new call back function to execute 
after request.

#### Parameters

##### callback

[`FragerAfterCallback`](../../../config/config/type-aliases/FragerAfterCallback.md)

Call back function to execute after request.

#### Returns

`Frager`

***

### base()

> **base**(`url`): `Frager`

Defined in: [api/frager.ts:47](https://github.com/kkatou7209/frager/blob/25da44507e44e35eaf72e7a7917a8e5de25272a7/lib/api/frager.ts#L47)

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

Defined in: [api/frager.ts:162](https://github.com/kkatou7209/frager/blob/25da44507e44e35eaf72e7a7917a8e5de25272a7/lib/api/frager.ts#L162)

Create new instance with setting new call back function to execute 
before request.

#### Parameters

##### callback

[`FragerBeforeCallback`](../../../config/config/type-aliases/FragerBeforeCallback.md)

Call back function to execute before request.

#### Returns

`Frager`

***

### cache()

> **cache**(`mode`): `Frager`

Defined in: [api/frager.ts:131](https://github.com/kkatou7209/frager/blob/25da44507e44e35eaf72e7a7917a8e5de25272a7/lib/api/frager.ts#L131)

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

Defined in: [api/frager.ts:33](https://github.com/kkatou7209/frager/blob/25da44507e44e35eaf72e7a7917a8e5de25272a7/lib/api/frager.ts#L33)

Get HTTP client.

#### Returns

[`FragerRequester`](../../requester/classes/FragerRequester.md)

***

### clone()

> **clone**(): `Frager`

Defined in: [api/frager.ts:38](https://github.com/kkatou7209/frager/blob/25da44507e44e35eaf72e7a7917a8e5de25272a7/lib/api/frager.ts#L38)

Create cloned instance.

#### Returns

`Frager`

***

### credentials()

> **credentials**(`mode`): `Frager`

Defined in: [api/frager.ts:123](https://github.com/kkatou7209/frager/blob/25da44507e44e35eaf72e7a7917a8e5de25272a7/lib/api/frager.ts#L123)

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

Defined in: [api/frager.ts:153](https://github.com/kkatou7209/frager/blob/25da44507e44e35eaf72e7a7917a8e5de25272a7/lib/api/frager.ts#L153)

Create new instance with disabling mock.

#### Returns

`Frager`

***

### enableMock()

> **enableMock**(): `Frager`

Defined in: [api/frager.ts:146](https://github.com/kkatou7209/frager/blob/25da44507e44e35eaf72e7a7917a8e5de25272a7/lib/api/frager.ts#L146)

Create new instance with enabling mock.

#### Returns

`Frager`

***

### header()

> **header**(`name`, `value`): `Frager`

Defined in: [api/frager.ts:56](https://github.com/kkatou7209/frager/blob/25da44507e44e35eaf72e7a7917a8e5de25272a7/lib/api/frager.ts#L56)

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

Defined in: [api/frager.ts:69](https://github.com/kkatou7209/frager/blob/25da44507e44e35eaf72e7a7917a8e5de25272a7/lib/api/frager.ts#L69)

Create new instance with replacing and setting new headers.

#### Parameters

##### headers

`Record`\<`string`, `string`\>

#### Returns

`Frager`

***

### keepalive()

> **keepalive**(`keepalive`): `Frager`

Defined in: [api/frager.ts:135](https://github.com/kkatou7209/frager/blob/25da44507e44e35eaf72e7a7917a8e5de25272a7/lib/api/frager.ts#L135)

#### Parameters

##### keepalive

`boolean`

#### Returns

`Frager`

***

### mock()

> **mock**(`mocker`): `Frager`

Defined in: [api/frager.ts:139](https://github.com/kkatou7209/frager/blob/25da44507e44e35eaf72e7a7917a8e5de25272a7/lib/api/frager.ts#L139)

#### Parameters

##### mocker

[`FragerMocker`](../../mock/mocker/classes/FragerMocker.md)

#### Returns

`Frager`

***

### mode()

> **mode**(`mode`): `Frager`

Defined in: [api/frager.ts:83](https://github.com/kkatou7209/frager/blob/25da44507e44e35eaf72e7a7917a8e5de25272a7/lib/api/frager.ts#L83)

Create new instance with setting request mode.

#### Parameters

##### mode

`RequestMode`

Request mode.

#### Returns

`Frager`

***

### prioprity()

> **prioprity**(`priority`): `Frager`

Defined in: [api/frager.ts:91](https://github.com/kkatou7209/frager/blob/25da44507e44e35eaf72e7a7917a8e5de25272a7/lib/api/frager.ts#L91)

Create new instance with setting request priority.

#### Parameters

##### priority

`RequestPriority`

Request priority.

#### Returns

`Frager`

***

### redirect()

> **redirect**(`redirect`): `Frager`

Defined in: [api/frager.ts:99](https://github.com/kkatou7209/frager/blob/25da44507e44e35eaf72e7a7917a8e5de25272a7/lib/api/frager.ts#L99)

Create new instance with setting request redirect mode.

#### Parameters

##### redirect

`RequestRedirect`

Request redirect mode.

#### Returns

`Frager`

***

### referrer()

> **referrer**(`referrer`): `Frager`

Defined in: [api/frager.ts:107](https://github.com/kkatou7209/frager/blob/25da44507e44e35eaf72e7a7917a8e5de25272a7/lib/api/frager.ts#L107)

Create new instance with setting request referrer.

#### Parameters

##### referrer

`string`

Request referrer.

#### Returns

`Frager`

***

### referrerPolicy()

> **referrerPolicy**(`policy`): `Frager`

Defined in: [api/frager.ts:115](https://github.com/kkatou7209/frager/blob/25da44507e44e35eaf72e7a7917a8e5de25272a7/lib/api/frager.ts#L115)

Create new instance with setting request referrer policy.

#### Parameters

##### policy

`ReferrerPolicy`

Referrer policy.

#### Returns

`Frager`

***

### create()

> `static` **create**(): [`FragerBuilder`](../../builder/classes/FragerBuilder.md)

Defined in: [api/frager.ts:23](https://github.com/kkatou7209/frager/blob/25da44507e44e35eaf72e7a7917a8e5de25272a7/lib/api/frager.ts#L23)

Get Farger builder.

#### Returns

[`FragerBuilder`](../../builder/classes/FragerBuilder.md)

***

### mocker()

> `static` **mocker**(): [`FragerMockerBuilder`](../../mock/builder/classes/FragerMockerBuilder.md)

Defined in: [api/frager.ts:28](https://github.com/kkatou7209/frager/blob/25da44507e44e35eaf72e7a7917a8e5de25272a7/lib/api/frager.ts#L28)

Get FragerMocker builder.

#### Returns

[`FragerMockerBuilder`](../../mock/builder/classes/FragerMockerBuilder.md)
