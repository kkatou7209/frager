[**frager v0.2.0**](../../README.md)

***

[frager](../../modules.md) / [frager](../README.md) / Frager

# Class: Frager

Defined in: [frager.ts:9](https://github.com/kkatou7209/frager/blob/3e44a5ea879bc197bd00a63031eb884a5a2133a6/lib/api/frager.ts#L9)

HTTP client class in Frager.

## Constructors

### Constructor

> **new Frager**(`config`): `Frager`

Defined in: [frager.ts:15](https://github.com/kkatou7209/frager/blob/3e44a5ea879bc197bd00a63031eb884a5a2133a6/lib/api/frager.ts#L15)

#### Parameters

##### config

`FragerConfig`

#### Returns

`Frager`

## Methods

### after()

> **after**(`callback`): `Frager`

Defined in: [frager.ts:122](https://github.com/kkatou7209/frager/blob/3e44a5ea879bc197bd00a63031eb884a5a2133a6/lib/api/frager.ts#L122)

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

Defined in: [frager.ts:46](https://github.com/kkatou7209/frager/blob/3e44a5ea879bc197bd00a63031eb884a5a2133a6/lib/api/frager.ts#L46)

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

Defined in: [frager.ts:113](https://github.com/kkatou7209/frager/blob/3e44a5ea879bc197bd00a63031eb884a5a2133a6/lib/api/frager.ts#L113)

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

Defined in: [frager.ts:90](https://github.com/kkatou7209/frager/blob/3e44a5ea879bc197bd00a63031eb884a5a2133a6/lib/api/frager.ts#L90)

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

Defined in: [frager.ts:32](https://github.com/kkatou7209/frager/blob/3e44a5ea879bc197bd00a63031eb884a5a2133a6/lib/api/frager.ts#L32)

Get HTTP client.

#### Returns

[`FragerRequester`](../../requester/classes/FragerRequester.md)

***

### clone()

> **clone**(): `Frager`

Defined in: [frager.ts:37](https://github.com/kkatou7209/frager/blob/3e44a5ea879bc197bd00a63031eb884a5a2133a6/lib/api/frager.ts#L37)

Create cloned instance.

#### Returns

`Frager`

***

### credentials()

> **credentials**(`mode`): `Frager`

Defined in: [frager.ts:82](https://github.com/kkatou7209/frager/blob/3e44a5ea879bc197bd00a63031eb884a5a2133a6/lib/api/frager.ts#L82)

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

Defined in: [frager.ts:104](https://github.com/kkatou7209/frager/blob/3e44a5ea879bc197bd00a63031eb884a5a2133a6/lib/api/frager.ts#L104)

Create new instance with disabling mock.

#### Returns

`Frager`

***

### enableMock()

> **enableMock**(): `Frager`

Defined in: [frager.ts:97](https://github.com/kkatou7209/frager/blob/3e44a5ea879bc197bd00a63031eb884a5a2133a6/lib/api/frager.ts#L97)

Create new instance with enabling mock.

#### Returns

`Frager`

***

### header()

> **header**(`name`, `value`): `Frager`

Defined in: [frager.ts:55](https://github.com/kkatou7209/frager/blob/3e44a5ea879bc197bd00a63031eb884a5a2133a6/lib/api/frager.ts#L55)

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

Defined in: [frager.ts:68](https://github.com/kkatou7209/frager/blob/3e44a5ea879bc197bd00a63031eb884a5a2133a6/lib/api/frager.ts#L68)

Create new instance with replacing and setting new headers.

#### Parameters

##### headers

`Record`\<`string`, `string`\>

#### Returns

`Frager`

***

### create()

> `static` **create**(): [`FragerBuilder`](../../builder/classes/FragerBuilder.md)

Defined in: [frager.ts:22](https://github.com/kkatou7209/frager/blob/3e44a5ea879bc197bd00a63031eb884a5a2133a6/lib/api/frager.ts#L22)

Get Farger builder.

#### Returns

[`FragerBuilder`](../../builder/classes/FragerBuilder.md)

***

### mocker()

> `static` **mocker**(): [`FragerMockerBuilder`](../../mock/builder/classes/FragerMockerBuilder.md)

Defined in: [frager.ts:27](https://github.com/kkatou7209/frager/blob/3e44a5ea879bc197bd00a63031eb884a5a2133a6/lib/api/frager.ts#L27)

Get FragerMocker builder.

#### Returns

[`FragerMockerBuilder`](../../mock/builder/classes/FragerMockerBuilder.md)
