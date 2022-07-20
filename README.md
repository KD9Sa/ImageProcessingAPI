# ImageProcessingAPI

An API to preview, resize and cache images using Sharp package.

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
-   nodemon
-   prettier
-   ts-node
-   typescript

<br>

**Dependencies List:**

-   express
-   jasmine
-   jasmine-spec-reporter
-   sharp
-   supertest

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

##Maintainability

The project is built with a structure which makes it scalable and maintainable:

-   Each file includes a specific criteria of functions. More functions of the same criteria can be added to the file to provide more features.
-   Groups of files serving a specific purpose are collected together inside a folder. More files can be added to the folder to serve a similar purpose.
