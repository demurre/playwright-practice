# Playwright practice

## To start:

```bash
pnpm i
```

## For running all tests:

```bash
pnpm playwright test tests
```

## For running specific test (home.spec.ts for example):

```bash
pnpm playwright test home.spec.ts -g "Click get started button using CSS Selector"
```

## For seeing what's under the hood:

```bash
DEBUG=pw:api pnpm playwright test home.spec.ts -g "Click get started button using CSS Selector"
```

## For step-by-step debug:

```bash
PWDEBUG=1 pnpm playwright test home.spec.ts
```

## For generating allure report:

```bash
pnpm allure generate allure-results --clean && pnpm allure open
```

## Using

![playwright](https://img.shields.io/badge/Playwright-006400.svg?style=for-the-badge&logo=Playwright&logoColor=black)
![faker](https://img.shields.io/badge/Faker-32363f.svg?style=for-the-badge&logo=Faker&logoColor=black)
![allure](https://img.shields.io/badge/Allure-ececec.svg?style=for-the-badge&logo=Allure&logoColor=black)
