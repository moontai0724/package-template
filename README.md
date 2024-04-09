# @moontai0724/package-template

[![npm](https://img.shields.io/npm/v/@moontai0724/package-template)](https://www.npmjs.com/package/@moontai0724/package-template)
[![npm](https://img.shields.io/npm/@moontai0724/dt/package-template)](https://www.npmjs.com/package/@moontai0724/package-template)
[![codecov](https://codecov.io/gh/moontai0724/package-template/graph/badge.svg)](https://codecov.io/gh/moontai0724/package-template)

## Getting Started

### 1. Use this template to create a new repository.

Click the [`Use this template`](https://github.com/new?template_name=package-template&template_owner=moontai0724) button on the top right corner of the repository page.

### 2. Clone the repository, and install the dependencies.

Just clone your repo and install the dependencies with any package manager you like. This template does not strong bind to any package manager, but the used package manager in GitHub Actions workflow is `pnpm`. You may need to modify the workflow file if you use other package managers.

### 3. Modify the package content to fit your project.

There are few places you need to modify to fit your project, like `package.json`, `README.md`. You can use the following command to replace most of the content:

```bash
YOUR_GITHUB_USER="moontai0724"
YOUR_REPO_NAME="package-template"
sed -i "s/moontai0724/${YOUR_GITHUB_USER}/g" package.json README.md
sed -i "s/package-template/${YOUR_REPO_NAME}/g" package.json README.md
```

### 4. Start coding!

## Publish

This template uses [CodeCov](https://docs.codecov.com/docs/quick-start) to check the code coverage. You can remove the CodeCov badge and the related scripts in `package.json` if you don't need it.
If you want to use CodeCov, you need to set the `CODECOV_TOKEN` in the [repository secrets](https://github.com/moontai0724/package-template/settings/secrets/actions).

Once you done, you can push your codes to the `v*` branch (e.g. `v1`, `v2`).

The actions in this template will auto test, build, bump version and publish the package to npm when you push the code to the `v*` branch. You can modify the workflow file to fit your needs.

## Install

### NPM

```bash
npm install @moontai0724/package-template
```

### Yarn

```bash
yarn add @moontai0724/package-template
```

### PNPM

```bash
pnpm add @moontai0724/package-template
```

## Usage

```typescript
import { add, divide, max } from "package-template";

add(1, 2); // 3
divide(1, 2); // 0.5
max(1, 2); // 2
```
