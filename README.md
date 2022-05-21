# React-hooks-axios

## Installation

Use npm to install react-hooks-axios.

```bash
npm install react-hooks-axios
```

## Usage

index.tsx

```typescript
import { AxiosProvider } from "react-hooks-axios-package";
import axios from "axios";

root.render(
  <AxiosProvider axios={axios}>
    <App />
  </AxiosProvider>
);
```

## License

[MIT](https://choosealicense.com/licenses/mit/)
