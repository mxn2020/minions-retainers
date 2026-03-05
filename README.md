![CI](https://github.com/mxn2020/minions-retainers-workspace/actions/workflows/ci.yml/badge.svg) ![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

# minions-retainers

**Recurring service agreements, care plans, monthly retainers, and subscription management**

Built on the [Minions SDK](https://github.com/mxn2020/minions).

---

## Quick Start

```bash
# TypeScript / Node.js
npm install @minions-retainers/sdk minions-sdk

# Python
pip install minions-retainers

# CLI (global)
npm install -g @minions-retainers/cli
```

---

## CLI

```bash
# Show help
retainers --help
```

---

## Python SDK

```python
from minions_retainers import create_client

client = create_client()
```

---

## Project Structure

```
minions-retainers/
  packages/
    core/           # TypeScript core library (@minions-retainers/sdk on npm)
    python/         # Python SDK (minions-retainers on PyPI)
    cli/            # CLI tool (@minions-retainers/cli on npm)
  apps/
    web/            # Playground web app
    docs/           # Astro Starlight documentation site
    blog/           # Blog
  examples/
    typescript/     # TypeScript usage examples
    python/         # Python usage examples
```

---

## Development

```bash
# Install dependencies
pnpm install

# Build all packages
pnpm run build

# Run tests
pnpm run test

# Type check
pnpm run lint
```

---

## Documentation

- Docs: [retainers.minions.help](https://retainers.minions.help)
- Blog: [retainers.minions.blog](https://retainers.minions.blog)
- App: [retainers.minions.wtf](https://retainers.minions.wtf)

---

## License

[MIT](LICENSE)
