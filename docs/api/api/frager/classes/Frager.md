[**frager v0.2.0**](../../../README.md)

***

[frager](../../../modules.md) / [api/frager](../README.md) / Frager

# Class: Frager

Defined in: [api/frager.ts:9](https://github.com/kkatou7209/frager/blob/719f61cb03a1b552f429a15e5ed05d7e85a71494/lib/api/frager.ts#L9)

HTTP client class in Frager.

## Constructors

### Constructor

> **new Frager**(`config`): `Frager`

Defined in: [api/frager.ts:15](https://github.com/kkatou7209/frager/blob/719f61cb03a1b552f429a15e5ed05d7e85a71494/lib/api/frager.ts#L15)

#### Parameters

##### config

[`FragerConfig`](../../../config/config/type-aliases/FragerConfig.md)

#### Returns

`Frager`

## Methods

### after()

> **after**(`callback`): `Frager`

Defined in: [api/frager.ts:166](https://github.com/kkatou7209/frager/blob/719f61cb03a1b552f429a15e5ed05d7e85a71494/lib/api/frager.ts#L166)

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

Defined in: [api/frager.ts:46](https://github.com/kkatou7209/frager/blob/719f61cb03a1b552f429a15e5ed05d7e85a71494/lib/api/frager.ts#L46)

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

Defined in: [api/frager.ts:157](https://github.com/kkatou7209/frager/blob/719f61cb03a1b552f429a15e5ed05d7e85a71494/lib/api/frager.ts#L157)

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

Defined in: [api/frager.ts:130](https://github.com/kkatou7209/frager/blob/719f61cb03a1b552f429a15e5ed05d7e85a71494/lib/api/frager.ts#L130)

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

Defined in: [api/frager.ts:32](https://github.com/kkatou7209/frager/blob/719f61cb03a1b552f429a15e5ed05d7e85a71494/lib/api/frager.ts#L32)

Get HTTP client.

#### Returns

[`FragerRequester`](../../requester/classes/FragerRequester.md)

***

### clone()

> **clone**(): `Frager`

Defined in: [api/frager.ts:37](https://github.com/kkatou7209/frager/blob/719f61cb03a1b552f429a15e5ed05d7e85a71494/lib/api/frager.ts#L37)

Create cloned instance.

#### Returns

`Frager`

***

### credentials()

> **credentials**(`mode`): `Frager`

Defined in: [api/frager.ts:122](https://github.com/kkatou7209/frager/blob/719f61cb03a1b552f429a15e5ed05d7e85a71494/lib/api/frager.ts#L122)

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

Defined in: [api/frager.ts:148](https://github.com/kkatou7209/frager/blob/719f61cb03a1b552f429a15e5ed05d7e85a71494/lib/api/frager.ts#L148)

Create new instance with disabling mock.

#### Returns

`Frager`

***

### enableMock()

> **enableMock**(): `Frager`

Defined in: [api/frager.ts:141](https://github.com/kkatou7209/frager/blob/719f61cb03a1b552f429a15e5ed05d7e85a71494/lib/api/frager.ts#L141)

Create new instance with enabling mock.

#### Returns

`Frager`

***

### header()

> **header**(`name`, `value`): `Frager`

Defined in: [api/frager.ts:55](https://github.com/kkatou7209/frager/blob/719f61cb03a1b552f429a15e5ed05d7e85a71494/lib/api/frager.ts#L55)

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

Defined in: [api/frager.ts:68](https://github.com/kkatou7209/frager/blob/719f61cb03a1b552f429a15e5ed05d7e85a71494/lib/api/frager.ts#L68)

Create new instance with replacing and setting new headers.

#### Parameters

##### headers

`Record`\<`string`, `string`\>

#### Returns

`Frager`

***

### keepalive()

> **keepalive**(`keepalive`): `Frager`

Defined in: [api/frager.ts:134](https://github.com/kkatou7209/frager/blob/719f61cb03a1b552f429a15e5ed05d7e85a71494/lib/api/frager.ts#L134)

#### Parameters

##### keepalive

`boolean`

#### Returns

`Frager`

***

### mode()

> **mode**(`mode`): `Frager`

Defined in: [api/frager.ts:82](https://github.com/kkatou7209/frager/blob/719f61cb03a1b552f429a15e5ed05d7e85a71494/lib/api/frager.ts#L82)

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

Defined in: [api/frager.ts:90](https://github.com/kkatou7209/frager/blob/719f61cb03a1b552f429a15e5ed05d7e85a71494/lib/api/frager.ts#L90)

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

Defined in: [api/frager.ts:98](https://github.com/kkatou7209/frager/blob/719f61cb03a1b552f429a15e5ed05d7e85a71494/lib/api/frager.ts#L98)

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

Defined in: [api/frager.ts:106](https://github.com/kkatou7209/frager/blob/719f61cb03a1b552f429a15e5ed05d7e85a71494/lib/api/frager.ts#L106)

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

Defined in: [api/frager.ts:114](https://github.com/kkatou7209/frager/blob/719f61cb03a1b552f429a15e5ed05d7e85a71494/lib/api/frager.ts#L114)

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

Defined in: [api/frager.ts:22](https://github.com/kkatou7209/frager/blob/719f61cb03a1b552f429a15e5ed05d7e85a71494/lib/api/frager.ts#L22)

Get Farger builder.

#### Returns

[`FragerBuilder`](../../builder/classes/FragerBuilder.md)

***

### mocker()

> `static` **mocker**(): [`FragerMockerBuilder`](../../mock/builder/classes/FragerMockerBuilder.md)

Defined in: [api/frager.ts:27](https://github.com/kkatou7209/frager/blob/719f61cb03a1b552f429a15e5ed05d7e85a71494/lib/api/frager.ts#L27)

Get FragerMocker builder.

#### Returns

[`FragerMockerBuilder`](../../mock/builder/classes/FragerMockerBuilder.md)
