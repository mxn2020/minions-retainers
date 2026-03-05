---
title: Quick Start
description: Get up and running with Minions Retainers in minutes
---

## TypeScript

```typescript
import { createClient } from '@minions-retainers/sdk';

const client = createClient();
console.log('Version:', client.version);
```

## Python

```python
from minions_retainers import create_client

client = create_client()
print(f"Version: {client['version']}")
```

## CLI

```bash
retainers info
```
