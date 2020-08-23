# normalize-indentation

Normalize start-of-line spaces by reducing values to eliminate additional indentation.

## Install

```
npm install @uppercod/normalize-indentation
```

## Usage

```js
import normalizeIndentation from "@uppercod/normalize-indentation";

normalizeIndentation(`
    line 1
        line 1.1
        line 1.2
    line 2
        line 2.1        
`);
```

**The script will remove the original indentation and adjust the swapping of tab and space for spaces**
