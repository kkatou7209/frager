# Frager

**Frager** is a simple HTTP client library wraping [**Fetch API**](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API).

## Features

- API methods for each HTTP verb
- Support for common request configuration
- Request mocking

## Installation

Just specify the package name when installing with your preferred package manager.

**NPM**

```bash
npm i frager
```

**Yarn**

```bash
yarn add frager
```

**PNPM**

```bash
pnpm add frager
```

**Bun**

```bash
bun add frager
```

## Usage

### How to initialize

You can create a `Frager` instance using the Builder Pattern with `FragerBuilder`, which is returned by the `create` method.

The `build` method creates a new `Frager` instance.

```ts
import { Frager } from 'frager';

const frager = Frager.create().build();
```

`FragerBuilder` provides various methods to configure common settings.

```ts
const frager = Frager.create()
    .base('https://example.com/api')
    .header('Content-Type', 'application/json; charset=utf-8;')
    .headers({
        'Accept': 'application/json; charset=utf-8;',
        'Accept-Language: en-US,en;q=0.5',
    })
    .before((request: Request) => {
        console.log(request.url);
    })
    .after((request: Request, response: Response) => {
        console.log(respone.ok);
    })
    .build();
```

### How to request

`Frager` provides request methods bellow:

- GET     : `get(url: string)`
- POST    : `post(url: string, body?: FragerBody | null)`
- PUT     : `put(url: string, body?: FragerBody | null)`
- DELETE  : `delete(url: string)`
- HEAD    : `head(url: string)`
- TRACE   : `trace(url: string)`
- CONNECT : `connect(url: string)`
- OPTIONS : `options(url: string)`

`FragerBody` refers to the types of data you can use as the request body. In addition to standard types like `Blob`, `ReadableStream`, and others supported by the Fetch API, `FragerBody` also allows you to use JavaScript objects and arrays directly. 

The Fetch API does not natively accept objects as request body data. Therefore, Frager provides a process to convert objects into a suitable request body format.

## License

Frager is under the MIT license.