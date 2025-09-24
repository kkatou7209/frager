[**frager v0.2.0**](../../../README.md)

***

[frager](../../../modules.md) / [api/requester](../README.md) / FragerRequester

# Class: FragerRequester

Defined in: [api/requester.ts:13](https://github.com/kkatou7209/frager/blob/25da44507e44e35eaf72e7a7917a8e5de25272a7/lib/api/requester.ts#L13)

HTTP requester class in Frager.

## Constructors

### Constructor

> **new FragerRequester**(`config`, `aborter`): `FragerRequester`

Defined in: [api/requester.ts:25](https://github.com/kkatou7209/frager/blob/25da44507e44e35eaf72e7a7917a8e5de25272a7/lib/api/requester.ts#L25)

#### Parameters

##### config

[`FragerConfig`](../../../config/config/type-aliases/FragerConfig.md)

##### aborter

`AbortController`

#### Returns

`FragerRequester`

## Methods

### body()

> **body**(`body`): `FragerRequester`

Defined in: [api/requester.ts:37](https://github.com/kkatou7209/frager/blob/25da44507e44e35eaf72e7a7917a8e5de25272a7/lib/api/requester.ts#L37)

Set request body.

#### Parameters

##### body

`FragerBody`

Request body.

#### Returns

`FragerRequester`

***

### connect()

> **connect**(`url`): `Promise`\<`Response`\>

Defined in: [api/requester.ts:156](https://github.com/kkatou7209/frager/blob/25da44507e44e35eaf72e7a7917a8e5de25272a7/lib/api/requester.ts#L156)

Request with CONNECT

#### Parameters

##### url

`string`

Request URL.

#### Returns

`Promise`\<`Response`\>

***

### delete()

> **delete**(`url`): `Promise`\<`Response`\>

Defined in: [api/requester.ts:123](https://github.com/kkatou7209/frager/blob/25da44507e44e35eaf72e7a7917a8e5de25272a7/lib/api/requester.ts#L123)

Request with DELETE.

#### Parameters

##### url

`string`

Request URL.

#### Returns

`Promise`\<`Response`\>

***

### get()

> **get**(`url`): `Promise`\<`Response`\>

Defined in: [api/requester.ts:79](https://github.com/kkatou7209/frager/blob/25da44507e44e35eaf72e7a7917a8e5de25272a7/lib/api/requester.ts#L79)

Request with GET.

#### Parameters

##### url

`string`

Request URL.

#### Returns

`Promise`\<`Response`\>

***

### head()

> **head**(`url`): `Promise`\<`Response`\>

Defined in: [api/requester.ts:134](https://github.com/kkatou7209/frager/blob/25da44507e44e35eaf72e7a7917a8e5de25272a7/lib/api/requester.ts#L134)

Request with HEAD.

#### Parameters

##### url

`string`

Request URL.

#### Returns

`Promise`\<`Response`\>

***

### header()

> **header**(`name`, `value`): `FragerRequester`

Defined in: [api/requester.ts:55](https://github.com/kkatou7209/frager/blob/25da44507e44e35eaf72e7a7917a8e5de25272a7/lib/api/requester.ts#L55)

Set or replace header.

#### Parameters

##### name

`string`

Header name.

##### value

`string`

#### Returns

`FragerRequester`

***

### headers()

> **headers**(`headers`): `FragerRequester`

Defined in: [api/requester.ts:67](https://github.com/kkatou7209/frager/blob/25da44507e44e35eaf72e7a7917a8e5de25272a7/lib/api/requester.ts#L67)

Set or replace headers.

#### Parameters

##### headers

`Record`\<`string`, `string`\>

Headers to set or replace.

#### Returns

`FragerRequester`

***

### options()

> **options**(`url`): `Promise`\<`Response`\>

Defined in: [api/requester.ts:167](https://github.com/kkatou7209/frager/blob/25da44507e44e35eaf72e7a7917a8e5de25272a7/lib/api/requester.ts#L167)

Request with OPTIONS.

#### Parameters

##### url

`string`

Request URL.

#### Returns

`Promise`\<`Response`\>

***

### params()

> **params**(`params`): `FragerRequester`

Defined in: [api/requester.ts:46](https://github.com/kkatou7209/frager/blob/25da44507e44e35eaf72e7a7917a8e5de25272a7/lib/api/requester.ts#L46)

Set query parameters.

#### Parameters

##### params

`Record`\<`string`, `any`\>

Query parameters.

#### Returns

`FragerRequester`

***

### patch()

> **patch**(`url`): `Promise`\<`Response`\>

Defined in: [api/requester.ts:112](https://github.com/kkatou7209/frager/blob/25da44507e44e35eaf72e7a7917a8e5de25272a7/lib/api/requester.ts#L112)

Request with PATCH.

#### Parameters

##### url

`string`

Request URL.

#### Returns

`Promise`\<`Response`\>

***

### post()

> **post**(`url`): `Promise`\<`Response`\>

Defined in: [api/requester.ts:90](https://github.com/kkatou7209/frager/blob/25da44507e44e35eaf72e7a7917a8e5de25272a7/lib/api/requester.ts#L90)

Request with POST.

#### Parameters

##### url

`string`

Request URL.

#### Returns

`Promise`\<`Response`\>

***

### put()

> **put**(`url`): `Promise`\<`Response`\>

Defined in: [api/requester.ts:101](https://github.com/kkatou7209/frager/blob/25da44507e44e35eaf72e7a7917a8e5de25272a7/lib/api/requester.ts#L101)

Request with PUT.

#### Parameters

##### url

`string`

Request URL.

#### Returns

`Promise`\<`Response`\>

***

### trace()

> **trace**(`url`): `Promise`\<`Response`\>

Defined in: [api/requester.ts:145](https://github.com/kkatou7209/frager/blob/25da44507e44e35eaf72e7a7917a8e5de25272a7/lib/api/requester.ts#L145)

Request with TRACE.

#### Parameters

##### url

`string`

Request URL.

#### Returns

`Promise`\<`Response`\>
