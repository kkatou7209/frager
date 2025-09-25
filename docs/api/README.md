**frager v1.0.0**

***

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
    .cache('default')
    .credentials('same-origin')
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

- GET
- POST
- PUT
- PATH
- DELETE
- HEAD
- TRACE
- CONNECT
- OPTIONS

### Get HTTP client instance and request

To make a request, use the `client` method to obtain an HTTP client `FragerRequester` instance.

```ts
frager.client()
    .get('/api/user/123');
```

`FragerRequester` provides additional options beyond those available in `Frager`.

```ts
frager.client()
    .params({
        'keywords': 'pc,tablet',
        'limit': '10',
    })
    .get('/api/products/search');
```

```ts
frager.client()
    .body({
        'name': 'John Doe',
        'age': 40,
    })
    .post('/api/user');
```

The options in `Frager` are also available.

```ts
frager.client()
    .header('Content-Type', 'image/jpeg')
    .post('/api/image');
```

### Mocking

To mock request, create mocker instance with the `mocker` method.

```ts
const mocker = Frager.mocker()
    .base('https://api.example.com')
    .onGet('/user/{id}', () => new Response({
        body: JSON.stringify({
            id: 123,
            name: 'John Doe',
        }),
        status: 200,
    }))
    .onPost('/user', () => new Response({
        body: JSON.stringify({
            id: 124,
            name: 'John Doe',
        }),
        status: 201,
    }))
    .build();
```

Register the mocker with the `mock` method.

```ts
const frager = Frager.create()
    .mock(mocker)
    .enableMock() // enable mock
    .build();
```

## API

API documents are in [/docs/api](/docs/api/modules.md)

## License

Frager is under the MIT license.
