[**frager v0.2.0**](../../../README.md)

***

[frager](../../../modules.md) / [config/config](../README.md) / FragerConfig

# Type Alias: FragerConfig

> **FragerConfig** = `object`

Defined in: [config/config.ts:12](https://github.com/kkatou7209/frager/blob/25da44507e44e35eaf72e7a7917a8e5de25272a7/lib/config/config.ts#L12)

Configuration of Frager.

## Properties

### after

> **after**: [`FragerAfterCallback`](FragerAfterCallback.md)

Defined in: [config/config.ts:64](https://github.com/kkatou7209/frager/blob/25da44507e44e35eaf72e7a7917a8e5de25272a7/lib/config/config.ts#L64)

Register execution after request. By default, do nothing.

***

### base

> **base**: `string`

Defined in: [config/config.ts:16](https://github.com/kkatou7209/frager/blob/25da44507e44e35eaf72e7a7917a8e5de25272a7/lib/config/config.ts#L16)

Base URL of every request. Default is `''`.

***

### before

> **before**: [`FragerBeforeCallback`](FragerBeforeCallback.md)

Defined in: [config/config.ts:60](https://github.com/kkatou7209/frager/blob/25da44507e44e35eaf72e7a7917a8e5de25272a7/lib/config/config.ts#L60)

Register execution before request. By default, do nothing.

***

### cache

> **cache**: `RequestCache`

Defined in: [config/config.ts:32](https://github.com/kkatou7209/frager/blob/25da44507e44e35eaf72e7a7917a8e5de25272a7/lib/config/config.ts#L32)

Cache mode. Default is `'default'`.

***

### credentials

> **credentials**: `RequestCredentials`

Defined in: [config/config.ts:36](https://github.com/kkatou7209/frager/blob/25da44507e44e35eaf72e7a7917a8e5de25272a7/lib/config/config.ts#L36)

Credentials mode. Default is `'same-origin'`.

***

### headers

> **headers**: `Record`\<`string`, `string`\>

Defined in: [config/config.ts:24](https://github.com/kkatou7209/frager/blob/25da44507e44e35eaf72e7a7917a8e5de25272a7/lib/config/config.ts#L24)

Common headers.

***

### keepalive

> **keepalive**: `boolean`

Defined in: [config/config.ts:56](https://github.com/kkatou7209/frager/blob/25da44507e44e35eaf72e7a7917a8e5de25272a7/lib/config/config.ts#L56)

Keepalive flag. Default is `false`.

***

### mock

> **mock**: `boolean`

Defined in: [config/config.ts:20](https://github.com/kkatou7209/frager/blob/25da44507e44e35eaf72e7a7917a8e5de25272a7/lib/config/config.ts#L20)

Enable mock. Default is `false`.

***

### mocker

> **mocker**: [`FragerMocker`](../../../api/mock/mocker/classes/FragerMocker.md)

Defined in: [config/config.ts:68](https://github.com/kkatou7209/frager/blob/25da44507e44e35eaf72e7a7917a8e5de25272a7/lib/config/config.ts#L68)

Mocker instance for handling mock requests.

***

### mode

> **mode**: `RequestMode`

Defined in: [config/config.ts:28](https://github.com/kkatou7209/frager/blob/25da44507e44e35eaf72e7a7917a8e5de25272a7/lib/config/config.ts#L28)

Request mode. Default is `cors`.

***

### priority

> **priority**: `RequestPriority`

Defined in: [config/config.ts:40](https://github.com/kkatou7209/frager/blob/25da44507e44e35eaf72e7a7917a8e5de25272a7/lib/config/config.ts#L40)

Request priority. Default is `'auto'`.

***

### redirect

> **redirect**: `RequestRedirect`

Defined in: [config/config.ts:44](https://github.com/kkatou7209/frager/blob/25da44507e44e35eaf72e7a7917a8e5de25272a7/lib/config/config.ts#L44)

Request redirect mode. Default is `'follow'`.

***

### referrer

> **referrer**: [`RequestReferrer`](RequestReferrer.md)

Defined in: [config/config.ts:48](https://github.com/kkatou7209/frager/blob/25da44507e44e35eaf72e7a7917a8e5de25272a7/lib/config/config.ts#L48)

Referrer policy. Default is `'auto:client'`.

***

### referrerPolicy

> **referrerPolicy**: `ReferrerPolicy`

Defined in: [config/config.ts:52](https://github.com/kkatou7209/frager/blob/25da44507e44e35eaf72e7a7917a8e5de25272a7/lib/config/config.ts#L52)

Referrer policy. Default is `'no-referrer'`.
