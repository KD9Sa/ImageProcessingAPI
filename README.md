# ImageProcessingAPI

An API to preview, resize and cache images using Sharp package.

---

## Get Started

_Note: the links in this text assume the server is running on localhost:3000_

The API has exactly two endpoints, the first for the home page and the second for image processing as follows:

-   [http://localhost:3000/](http://localhost:3000/) <pre> _Home page endpoint_</pre>
-   [http://localhost:3000/api](http://localhost:3000/api) <pre> _Image processing endpoint_</pre>

The home page contains a brief description of what the API is capable of doing and provides some instructions to get started using it.

For the image processing endpoint, it must be combined with valid parameters to provide the desired results. There are 3 expected parameters:

-   **imageName**: _Mandatory parameter_. Must be passed an existing image name in the `imgs/original` folder.
-   **width**: _Optional parameter_. Must be passed a positive integer.
-   **height**: _Optional parameter_. Must be passed a positive integer.

The API will return and display the original image if the **imageName** parameter is provided alone. For example:
[http://localhost:3000/api?imageName=fjord](http://localhost:3000/api?imageName=fjord)

The API will resize, cache, and display the resized image if all the three parameters, **imageName**, **width**, and **height**, are provided. For example:
[http://localhost:3000/api?imageName=fjord&width=300&height=400](http://localhost:3000/api?imageName=fjord&width=300&height=400)

---

## Configurations

The following are the configurations used to deliver this project. Including devDependencies, dependencies, and scripts used:

_Note: the Node.js version used is v16.15.1_

<br>

**devDependencies List:**

-   @types/express
-   @types/jasmine
-   @types/node
-   @types/sharp
-   @types/supertest
-   @typescript-eslint/eslint-plugin
-   @typescript-eslint/parser
-   eslint
-   eslint-config-prettier
-   eslint-plugin-prettier
-   jasmine
-   jasmine-spec-reporter
-   nodemon
-   prettier
-   supertest
-   ts-node
-   typescript

<br>

**Dependencies List:**

-   express
-   sharp

<br>

**Scripts List:**

-   "prettier": "prettier --config .prettierrc \"src/\*_/_.ts\" --write"
-   "lint": "eslint . --ext .ts"
-   "build": "npx tsc"
-   "jasmine": "jasmine"
-   "test": "npm run build & npm run jasmine"
-   "start": "nodemon src/index.ts"
-   "startjs": "nodemon dist/."

---

## File Structure

The following represents the project's file structure:

    ├── public
    │      ├──  html
    │      │     └── index.html
    │      └──  imgs
    │            ├── original
    │            │      └── original_image.jpg
    │            └── thumbnails
    │                   └── thumbnail.jpg
    ├── spec
    │      └── support
    │           └── jasmine.json
    ├── src
    │     ├──  routes
    │     │     ├── api
    │     │     │     └── control.ts
    │     │     └── index.ts
    │     ├──  tests
    │     │     ├── helpers
    │     │     │      └── reporter.ts
    │     │     ├── routes
    │     │     │      ├── api
    │     │     │      │     └── controlSpec.ts
    │     │     │      └── indexSpec.ts
    │     │     ├── utils
    │     │     │      ├── handlerSpec.ts
    │     │     │      ├── img-processSpec.ts
    │     │     │      └── validatorSpec.ts
    │     │     └── indexSpec.ts
    │     ├──  utils
    │     │     ├── handler.ts
    │     │     ├── img-process.ts
    │     │     └── validator.ts
    │     └── index.ts
    ├── .eslintignore
    ├── .eslintrc.json
    ├── .gitignore
    ├── .prettierignore
    ├── .prettierrc.json
    ├── package-lock.json
    ├── package.json
    ├── README.md
    └── tsconfig.json

---

## Maintainability

The project is built with a structure which makes it scalable and maintainable:

-   Each file includes a specific criteria of functions. More functions of the same criteria can be added to the file to provide more features.
-   Groups of files serving a specific purpose are collected together inside a folder. More files can be added to the folder to serve a similar purpose.
